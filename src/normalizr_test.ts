/// <reference path="../typings/browser.d.ts" />
import { normalize, Schema, arrayOf } from 'normalizr';
var article = new Schema('articles'),
    user = new Schema('users'),
    collection = new Schema('collections'),
    feedSchema,
    input;
article.define({
    author: user,
    collections: arrayOf(collection)
});

collection.define({
    curator: user
});

feedSchema = {
    feed: arrayOf(article)
};

 input = {
      feed: [{
        id: 1,
        title: 'Some Article',
        author: {
          id: 3,
          name: 'Mike Persson'
        },
        collections: [{
          id: 1,
          title: 'Awesome Writing',
          curator: {
            id: 4,
            name: 'Andy Warhol'
          }
        }, {
          id: 7,
          title: 'Even Awesomer',
          curator: {
            id: 100,
            name: 'T.S. Eliot'
          }
        }]
      }, {
        id: 2,
        title: 'Other Article',
        collections: [{
          id: 2,
          title: 'Neverhood',
          curator: {
            id: 120,
            name: 'Ada Lovelace'
          }
        }],
        author: {
          id: 2,
          name: 'Pete Hunt'
        }
      }]
    };

    Object.freeze(input);

    normalize(input, feedSchema).should.eql({
      result: {
        feed: [1, 2]
      },
      entities: {
        articles: {
          1: {
            id: 1,
            title: 'Some Article',
            author: 3,
            collections: [1, 7]
          },
          2: {
            id: 2,
            title: 'Other Article',
            author: 2,
            collections: [2]
          }
        },
        collections: {
          1: {
            id: 1,
            title: 'Awesome Writing',
            curator: 4
          },
          2: {
            id: 2,
            title: 'Neverhood',
            curator: 120
          },
          7: {
            id: 7,
            title: 'Even Awesomer',
            curator: 100
          }
        },
        users: {
          2: {
            id: 2,
            name: 'Pete Hunt'
          },
          3: {
            id: 3,
            name: 'Mike Persson'
          },
          4: {
            id: 4,
            name: 'Andy Warhol'
          },
          100: {
            id: 100,
            name: 'T.S. Eliot'
          },
          120: {
            id: 120,
            name: 'Ada Lovelace'
          }
        }
      }
    });