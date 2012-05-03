var strata = require("strata"),
    path = require("path")

strata.use(strata.commonLogger)
strata.use(strata.contentType, "text/plain")
strata.use(strata.contentLength)
strata.use(strata.file, path.join(__dirname, "public"))

strata.get("/", function (env, callback) {
    callback(200, {}, "Hello world!")
})

strata.run()
