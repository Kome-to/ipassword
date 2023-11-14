import multer from 'multer';
import path from 'path';
import fileHelper from '../common/helpers/file';

const storage = (storageFolder: string) =>
  multer.diskStorage({
    destination: (_req, _file, cb) => {
      fileHelper.createFolderIfNotExists(storageFolder);
      cb(null, `${process.cwd()}/${storageFolder}`);
    },
    filename: (req, file, cb) => {
      const fileName = `${new Date().getTime()}${path.extname(file.originalname)}`;
      req.body.fileName = fileName;
      cb(null, fileName);
    },
  });

export default {
  storage,
};
