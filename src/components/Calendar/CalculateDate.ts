function getDaysInMonth(year = 2022, month = 10) {
    const date = new Date(year, month, 1);
    let days = [];
    let count = 0;
    const today = new Date().getDate();
    while (date.getMonth() === month && count < 7) {
        days.push({
            monthDay: date.getDate(),
            weekDay: LocaleConfig.dayNamesShort[date.getDay()],
            today: date.getDate() === today ? true : false,
        });
        date.setDate(date.getDate() + 1);
        count++;
    }

    getFirstLastDaysWeek(year, month, today);
    return days;
}

function getFirstLastDaysWeek(year: number, month: number, day: number) {
    // const today = new Date();
    const date = new Date(year, 3, 25);
    const today = new Date().getDate();
    let week = [];
    let count = 0;
    const firstCurrWeekDay = new Date(date.setDate(date.getDate() - date.getDay()));
    const lastCurrWeekDay = new Date(date.setDate(date.getDate() - date.getDay() + 6));

    // const firstWeekMonthDay = new Date(date.setDate(date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1)));
    // const lastWeekMonthDay = new Date(date.setDate(firstWeekMonthDay.getDate() + 6));
    while (count < 7) {
        const monthDay = new Date(firstCurrWeekDay.setDate(firstCurrWeekDay.getDate() - firstCurrWeekDay.getDay() + count));
        week.push({
            monthDay: monthDay.getDate(),
            weekDay: LocaleConfig.dayNamesShort[monthDay.getDay()],
            today: monthDay.getDate() === today ? true : false,
        });
        count++;
    }

    // while (count < 7) {
    //     const monthDay = new Date(firstCurrWeekDay.setDate(firstCurrWeekDay.getDate() - firstCurrWeekDay.getDay() + count));
    //     week.push({
    //         monthDay: monthDay.getDate(),
    //         weekDay: LocaleConfig.dayNamesShort[monthDay.getDay()],
    //     });
    //     count++;
    // }

    console.log("[WEEK DAYS]", week);
    // console.log("[FIRST WEEK DAY]", firstCurrWeekDay.getDate());
    // console.log("[LAST WEEK DAY]", lastCurrWeekDay.getDate());
}

//  monthNames: [
//         { id: 1, name: "Janeiro" },
//         { id: 2, name: "Fevereiro" },
//         { id: 3, name: "Março" },
//         { id: 4, name: "Abril" },
//         { id: 5, name: "Maio" },
//         { id: 6, name: "Junho" },
//         { id: 7, name: "Julho" },
//         { id: 8, name: "Agosto" },
//         { id: 9, name: "Setembro" },
//         { id: 10, name: "Outubro" },
//         { id: 11, name: "Novembro" },
//         { id: 12, name: "Dezembro" },
