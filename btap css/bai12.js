document.getElementById('button-print').addEventListener('click', function() {
    let dayValue = parseInt(document.getElementById('input-day').value);
    let monthValue = parseInt(document.getElementById('input-month').value);
    let yearValue = parseInt(document.getElementById('input-year').value);

    if (isNaN(dayValue) || isNaN(monthValue) || isNaN(yearValue)) {
        alert('Vui lòng nhập đầy đủ ngày tháng năm');
        return;
    }

    let targetDate = new Date(yearValue, monthValue - 1, dayValue);

    if (targetDate.getFullYear() !== yearValue || 
        targetDate.getMonth() !== monthValue - 1 || 
        targetDate.getDate() !== dayValue) {
        alert('Ngày tháng năm không hợp lệ');
        return;
    }

    document.getElementById('year-display').innerText = yearValue;
    document.getElementById('month-display').innerText = 'Tháng ' + monthValue;
    document.getElementById('day-display').innerText = dayValue;

    let dayOfWeek = targetDate.getDay();
    let weekdayNames = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    document.getElementById('weekday-display').innerText = weekdayNames[dayOfWeek];

    let currentHour = new Date().getHours();
    let greetingText = '';

    if (currentHour >= 4 && currentHour < 11) {
        greetingText = 'Chào buổi sáng';
    } else if (currentHour >= 11 && currentHour < 13) {
        greetingText = 'Chào buổi trưa';
    } else if (currentHour >= 13 && currentHour < 18) {
        greetingText = 'Chào buổi chiều';
    } else if (currentHour >= 18 && currentHour < 22) {
        greetingText = 'Chào buổi tối';
    } else {
        greetingText = 'Chúc ngủ ngon';
    }

    document.getElementById('greeting-display').innerText = greetingText;
});