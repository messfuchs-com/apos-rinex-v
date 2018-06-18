export default function formatDate(date){
    const tempDate = new Date(date);
    const mm = tempDate.getMonth()+1;
    const dd = tempDate.getDate();

    return [
        tempDate.getFullYear()+'',
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd
    ].join("-");
}

export function dateToObject(date){
    const tempDate = new Date(date);
    const mm = tempDate.getMonth()+1;
    const dd = tempDate.getDate();

    return {
        year: tempDate.getFullYear(),
        month: (mm > 9 ? '' : '0') + mm,
        date: (dd > 9 ? '' : '0') + dd
    }
}