module.exports = class {

  data () {
    return {
      permalink: '.collections.json',
    };
  }

  // We only need the absolute URL (without host) right now
  render (data) {

    const { all, ...rawCollectionList } = data.collections;
    const collectionList = {};

    for (const [name, pageList] of Object.entries(rawCollectionList)) {
      if (collectionList[name] == null) {
        collectionList[name] = [];
      }
      for (const page of pageList) {
        collectionList[name].push({
          url: page.url,
          fileSlug: page.fileSlug,
          filePathStem: page.filePathStem,
          date: page.date,
          inputPath: page.inputPath,
          outputPath: page.outputPath,
        });
      }
    }

    return JSON.stringify(collectionList, null, '  ');
  }
};
