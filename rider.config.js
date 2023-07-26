let System = System || {
    config: () => {
    }
};
System.config({
    "paths": {
        "~/*": ".src/",
        "~utils": ".src/utils/",
        "~services": ".src/services/",
        "~components": ".src/components/",
        "~contentful": ".src/contentful/",
    }
})