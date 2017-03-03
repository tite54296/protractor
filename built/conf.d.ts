export interface Config {
    directConnect?: true;
    specs?: ["test.js"];
    capabilities?: {
        browserName?: "chrome";
        name?: "test project";
        logName?: "chrome - test";
        count: 1;
        shardTestFiles: false;
        maxInstances: 1;
    };
}
