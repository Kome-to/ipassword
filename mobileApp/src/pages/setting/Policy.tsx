import {Colors, FontSize} from '@common/assets/theme/variables';
import React from 'react';
import {Text, View, ScrollView} from 'react-native';

const Policy: React.FC = () => {
  return (
    <ScrollView>
      <View style={{marginHorizontal: 10}}>
        <Text
          style={{
            fontSize: FontSize.large,
            marginBottom: 10,
            color: Colors.primary,
          }}>
          1. Mục Tiêu và Phạm Vi
        </Text>
        <Text style={{fontSize: FontSize.large, marginBottom: 10}}>
          Chúng tôi cam kết bảo vệ thông tin cá nhân của người dùng trong quá
          trình sử dụng ứng dụng quản lý mật khẩu. Chính sách bảo mật này áp
          dụng cho tất cả thông tin được thu thập, xử lý hoặc lưu trữ thông qua
          ứng dụng của chúng tôi.
        </Text>
        <Text
          style={{
            fontSize: FontSize.large,
            marginBottom: 10,
            color: Colors.primary,
          }}>
          2. Thu Thập Thông Tin
        </Text>
        <Text style={{fontSize: FontSize.large, marginBottom: 10}}>
          Chúng tôi có thể thu thập thông tin cá nhân từ người dùng khi họ đăng
          ký, sử dụng hoặc truy cập vào ứng dụng của chúng tôi. Thông tin này có
          thể bao gồm tên, địa chỉ email và mật khẩu của người dùng.
        </Text>
        <Text
          style={{
            fontSize: FontSize.large,
            marginBottom: 10,
            color: Colors.primary,
          }}>
          3. Bảo Mật Thông Tin
        </Text>
        <Text style={{fontSize: FontSize.large, marginBottom: 10}}>
          Chúng tôi cam kết bảo vệ thông tin cá nhân của người dùng và sử dụng
          các biện pháp bảo mật hợp lý để ngăn chặn truy cập trái phép, sử dụng,
          tiết lộ hoặc sửa đổi thông tin cá nhân. Mật khẩu của người dùng được
          mã hóa và lưu trữ dưới dạng mã hóa không thể đảo ngược. Chúng tôi sử
          dụng các phương pháp bảo mật công nghệ để bảo vệ thông tin cá nhân khi
          truyền qua internet.
        </Text>
        <Text
          style={{
            fontSize: FontSize.large,
            marginBottom: 10,
            color: Colors.primary,
          }}>
          4. Sử Dụng Thông Tin
        </Text>
        <Text style={{fontSize: FontSize.large, marginBottom: 10}}>
          Thông tin cá nhân của người dùng có thể được sử dụng để cung cấp dịch
          vụ, hỗ trợ khách hàng và cải thiện trải nghiệm người dùng. Chúng tôi
          cam kết không chia sẻ thông tin cá nhân này với bên thứ ba mà không có
          sự cho phép của người dùng, trừ khi có yêu cầu pháp lý.
        </Text>
        <Text
          style={{
            fontSize: FontSize.large,
            marginBottom: 10,
            color: Colors.primary,
          }}>
          5. Quyền Lợi của Người Dùng
        </Text>
        <Text style={{fontSize: FontSize.large, marginBottom: 10}}>
          Người dùng có quyền truy cập, chỉnh sửa hoặc xóa thông tin cá nhân của
          họ từ hệ thống của chúng tôi. Họ cũng có thể yêu cầu thông tin về cách
          chúng tôi thu thập, xử lý hoặc lưu trữ dữ liệu cá nhân của họ.
        </Text>
        <Text
          style={{
            fontSize: FontSize.large,
            marginBottom: 10,
            color: Colors.primary,
          }}>
          6. Thay Đổi Chính Sách Bảo Mật
        </Text>
        <Text style={{fontSize: FontSize.large, marginBottom: 10}}>
          Chúng tôi có thể cập nhật chính sách bảo mật này để phản ánh các thay
          đổi trong pháp luật, công nghệ hoặc các yêu cầu khác. Mọi thay đổi sẽ
          được thông báo trên trang web hoặc thông qua email để người dùng có
          thể hiểu rõ và thực hiện các bước cần thiết.
        </Text>
        <Text
          style={{
            fontSize: FontSize.large,
            marginBottom: 10,
            color: Colors.primary,
          }}>
          7. Liên Hệ
        </Text>
        <Text style={{fontSize: FontSize.large, marginBottom: 10}}>
          Nếu có bất kỳ câu hỏi hoặc quan ngại nào về chính sách bảo mật của
          chúng tôi, người dùng có thể liên hệ với chúng tôi qua email hoặc
          thông qua các phương tiện liên lạc khác được cung cấp trên ứng dụng
          của chúng tôi.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Policy;
