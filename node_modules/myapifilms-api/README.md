# myapifilms-api

API Client for myapifilms.com

## installation

    npm i myapifilms-api

## build status

[![Build Status](https://travis-ci.org/eventEmitter/myapifilms-api.png?branch=master)](https://travis-ci.org/eventEmitter/myapifilms-api)


## usage
    
    // import
    var MyAPIFilms = require('myapifilms-api');


Create an instance of the API client without an api key

    var api = new MyAPIFilms();



Create an instance of the API client with an api key

    var api = new MyAPIFilms('myToken');



Create an instance of the API client with an api key and a rate limit other than 30 requests / 10 seconds.

    var api = new MyAPIFilms({
          token: 'myOptionalToken'
        , rateLimit: 30
        , interval: 10
        , timeout: 20000 // abort requests after 20 seconds
    });


You may use all request parameters specified on the [My API Films](http://www.myapifilms.com/) website.


list movies using promises

    api({title:'manche hunde müssen sterben'}).list().then(function(movie) {
        log(movie);
    }).catch(function(err) {
        log(err);
    });


list a movie using callbacks

    api({
          idIMDB:'tt3838306'
        , actors: 'F'
    }).list(function(err, movie) {
        log(err, movie);
    });


A result may look like this:

    {
        actors: (9):[
            0: {
                actorId: "nm6604581"
                , actorName: "Thomas Loosli"
                , character: ""
                , urlCharacter: "http://www.imdb.com"
                , urlPhoto: ""
                , urlProfile: "http://www.imdb.com/name/nm6604581"
            }
            , 1: {
                actorId: "nm6604574"
                , actorName: "Julien Bouldoires"
                , character: ""
                , urlCharacter: "http://www.imdb.com"
                , urlPhoto: ""
                , urlProfile: "http://www.imdb.com/name/nm6604574"
            }
            , 2: {
                actorId: "nm6604576"
                , actorName: "Michael van der Weg"
                , character: ""
                , urlCharacter: "http://www.imdb.com"
                , urlPhoto: ""
                , urlProfile: "http://www.imdb.com/name/nm6604576"
            }
            , 3: {
                actorId: "nm6604583"
                , actorName: "Nono Wyss"
                , character: ""
                , urlCharacter: "http://www.imdb.com"
                , urlPhoto: ""
                , urlProfile: "http://www.imdb.com/name/nm6604583"
            }
            , 4: {
                actorId: "nm6604567"
                , actorName: "Isabelle Freymond"
                , character: ""
                , urlCharacter: "http://www.imdb.com"
                , urlPhoto: ""
                , urlProfile: "http://www.imdb.com/name/nm6604567"
            }
            , 5: {
                actorId: "nm6604585"
                , actorName: "Thomas Brändli"
                , character: ""
                , urlCharacter: "http://www.imdb.com"
                , urlPhoto: ""
                , urlProfile: "http://www.imdb.com/name/nm6604585"
            }
            , 6: {
                actorId: "nm6604578"
                , actorName: "Olivier Tilleux"
                , character: ""
                , urlCharacter: "http://www.imdb.com"
                , urlPhoto: ""
                , urlProfile: "http://www.imdb.com/name/nm6604578"
            }
            , 7: {
                actorId: "nm6604580"
                , actorName: "Marie-Jeanne Liengme"
                , character: ""
                , urlCharacter: "http://www.imdb.com"
                , urlPhoto: ""
                , urlProfile: "http://www.imdb.com/name/nm6604580"
            }
            , 8: {
                actorId: "nm6604573"
                , actorName: "Micha Hurni"
                , character: ""
                , urlCharacter: "http://www.imdb.com"
                , urlPhoto: ""
                , urlProfile: "http://www.imdb.com/name/nm6604573"
            }
        ]
        , countries: (1):[
            0: "Switzerland"
        ]
        , directors: (1):[
            0: {
                name: "Laurent Wyss"
                , nameId: "nm6604577"
            }
        ]
        , filmingLocations: (0):[]
        , genres: (2):[
            0: "Crime"
            , 1: "Drama"
        ]
        , idIMDB: "tt3838306"
        , languages: (1):[
            0: "German"
        ]
        , metascore: ""
        , originalTitle: ""
        , plot: "'Damn it, what on earth am I doing here!' - Dr. Basil Feurchtegott operates an complete stranger on the kitchen table in his vacation home, and suddenly finds himself in a very dangerous situation. However, the doctor hasn't felt so alive for a long time. 'The Man', a contract killer, had just traveled by train across the border to Switzerland. In a high rise building 'The Man' accomplishes his jo..." (omitted 392)
        , rated: ""
        , rating: ""
        , releaseDate: ""
        , runtime: (1):[
            0: "81 min"
        ]
        , simplePlot: "'Damn it, what on earth am I doing here!' - Dr. Basil Feurchtegott operates an complete stranger on the kitchen table in his vacation home, and suddenly finds himself in a very dangerous ... See full summary »"
        , title: "Manche Hunde müssen sterben"
        , urlIMDB: "http://www.imdb.com/title/tt3838306"
        , urlPoster: ""
        , votes: ""
        , writers: (0):[]
        , year: "2014"
    }


