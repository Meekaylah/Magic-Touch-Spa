let calendar = document.querySelector('.calendar')

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (!month) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    // get first day of month
    
    let first_day = new Date(year, month, 1)

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }
}

let month_list = calendar.querySelector('.month-list')

month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show')
        curr_month.value = index
        generateCalendar(index, curr_year.value)
    }
    month_list.appendChild(month)
})

let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick = () => {
    month_list.classList.add('show')
}

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

let dark_mode_toggle = document.querySelector('.dark-mode-switch')

dark_mode_toggle.onclick = () => {
    document.querySelector('body').classList.toggle('light')
    document.querySelector('body').classList.toggle('dark')
}






let Lastname = document.getElementById("l_name");
let welcomemsg = document.getElementById("heymsg");

            Lastname.onfocus = function() {
                heymsg.innerHTML = "";
            };

            Lastname.onblur = function() {
                heymsg.innerHTML = "Welcome" + " " + Lastname.value;
            };

            let Age = document.getElementById("age");

            function checkAge() {
                var m = document.getElementById("f_name").value;
                var m = m.trim();
                var n = document.getElementById("l_name").value;
                var n = n.trim();
                var q = document.getElementById("phone").value;
                var q = q.trim();
                var r = document.getElementById("email_ad").value;
                var r = r.trim();
                var p = document.getElementById("job").value;
                var p = p.trim();
                var a = document.getElementById("age").value;
                var a = a.trim();
            }

            var yourTextArea = document.getElementById("address").value;
            var yourTextArea = yourTextArea.trim()
            var yourTextArea = document.getElementById("address1").value;
            var yourTextArea = yourTextArea.trim()


            if (address == "" || address1 == "" || m == "" || n == "" || q == "" || r == "" || p == "" || a == "") {
                alert("This field is empty! Please fill out the form");
            }
            else if (address.length < 1 || address.length > 80) {
                alert("This field must have less than 80 and more than 1 characters.")
            }
            else if (a < 18) {
                alert("You are below the legal age to use this platform")
            }
            else if (address == address1) {
                alert("Address Matchs! Please type in correct alternate address")
            }
            else if (q == "a" || q == "b" || q == "c" || q == "d" || q == "e" || q == "f" || q == "g" || q == "h" || q == "i" || q == "j" || q == "k" || q == "l" || q == "m" || q == "n" || q == "o" || q == "p" || q == "q" || q == "r" || q == "s" || q == "t" || q == "u" || q == "v" || q == "w" || q == "x" || q == "y" || q == "z") {
                alert("Phone number cannot contain any letters, only numbers.")
            }
            else {
                document.getElementById("result").innerHTML = "Registration successful"
            }