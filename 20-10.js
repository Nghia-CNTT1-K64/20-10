// Lời chúc ngẫu nhiên
const messages = [
    "20/10 đến rồi, chúc bạn yêu quý của tôi có làn da mịn màng, đôi môi thắm dịu dàng khiến hàng loạt các chàng trai phải quỳ xuống xin nâng khăn sửa túi!",
    "Chúc bạn có một ngày 20/10 tràn đầy yêu thương và niềm vui!",
    "20/10 vui vẻ không cau có, nụ cười luôn nở trên môi để nhận thật nhiều quà và lời chúc nhé. Hãy bỏ qua tất cả những lo lắng, muộn phiền để hưởng thụ một ngày 20/10 thật đặc biệt và ý nghĩa nhé.",
    "Chúc bạn gặp nhiều may mắn và thành công trong cuộc sống!",
    "8386 mãi đỉnh, mãi đỉnh"
];

function showMessage() {
    // Chọn ngẫu nhiên lời chúc
    const message = messages[Math.floor(Math.random() * messages.length)];
    // Hiển thị lời chúc
    const messageBox = document.getElementById('messageBox');
    const messageText = document.getElementById('messageText');
    messageText.innerText = message;
    messageBox.style.display = 'block';
}