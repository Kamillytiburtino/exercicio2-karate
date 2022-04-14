function setup () {
    var config = {
        baseUrl: "https://petstore.swagger.io/v2"
    }

    karate.configure("headers", {
        operador: "Kamilly",
        framework: "Karate"
    });

    karate.configure('connectTimeout', 40000);

    karate.configure('logPrettyRequest', true);
    karate.configure('logPrettyResponse', true);
    
    return config;
}