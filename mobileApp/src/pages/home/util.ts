import {OptionToastSuccess} from '@common/assets/theme/common';
import {Colors} from '@common/assets/theme/variables';
import cryptography from '@common/utils/cryptography';
import {ActionSheetOptions} from '@expo/react-native-action-sheet';
import {openUrl} from '@pages/setting/Setting';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-root-toast';

export const menuPasswordParams = (
  data,
  onEdit,
  onDelete,
): [ActionSheetOptions, (i?: number | undefined) => void | Promise<void>] => {
  const options = [
    'Mở trong trình duyệt',
    'Sao chép tên tài khoản',
    'Sao chép mật khẩu',
    'Xem',
    'Hủy',
    'Xóa',
  ];

  const destructiveButtonIndex = options.length - 1;
  const cancelButtonIndex = options.length - 2;

  return [
    {
      options,
      destructiveButtonIndex,
      cancelButtonIndex,
      containerStyle: {backgroundColor: Colors.subPrimary},
      tintColor: Colors.text,
    },
    async (selectedIndex: number) => {
      switch (selectedIndex) {
        case 0:
          await openUrl(data.url);
          break;
        case 1:
          Clipboard.setString(data.username);
          Toast.show('Sao chép username thành công', OptionToastSuccess);
          break;
        case 2:
          Clipboard.setString(data.username);
          Toast.show('Sao chép username thành công', OptionToastSuccess);
          break;
          break;
        case 3:
          onEdit();
          break;

        case destructiveButtonIndex:
          await onDelete(data);
          break;
        default:
          break;
      }
    },
  ];
};

export const passwordTransform = (data, key, mode) => {
  if (!key) {
    return null;
  }
  let displayName = data.displayName;
  let url = data.url;
  let username = data.username;
  let password = data.password;
  if (mode === 'en') {
    displayName = cryptography.aesEncrypted(displayName, key);
    url = cryptography.aesEncrypted(url, key);
    username = cryptography.aesEncrypted(username, key);
    password = cryptography.aesEncrypted(password, key);
  } else {
    displayName = cryptography.aesDecrypted(displayName, key);
    url = cryptography.aesDecrypted(url, key);
    username = cryptography.aesDecrypted(username, key);
    password = cryptography.aesDecrypted(password, key);
  }

  return {
    ...data,
    displayName,
    url,
    username,
    password,
  };
};
