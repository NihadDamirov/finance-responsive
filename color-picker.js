const colorPickerBtn = document.getElementById('color-picker-btn');
const colorPicker = document.getElementById('color-picker');
colorPickerBtn.addEventListener('click', () => {
colorPicker.click();
});
colorPicker.addEventListener('change', () => {
    console.log(colorPicker.target.value);
});