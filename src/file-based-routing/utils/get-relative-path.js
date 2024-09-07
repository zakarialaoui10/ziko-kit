const getRelativePath = (baseDir, absolutePath) => {
    baseDir = baseDir.replace(/\\/g, '/').replace(/\/$/, '');
    absolutePath = absolutePath.replace(/\\/g, '/');  
    if (absolutePath.startsWith(baseDir)) {
      return absolutePath.substring(baseDir.length).replace(/^\/+/, '');
    } else {
      throw new Error(`The path does not start with the base directory.`);
    }
};
export {
  getRelativePath
}  