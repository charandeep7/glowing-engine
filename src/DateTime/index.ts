export function LocaleTimeIn12HourFormat() {
    return new Date().toLocaleTimeString()
}

export function LocaleTimeIn24HourFormat() {
    return new Date().toLocaleTimeString([], {
        hour12: false,
    })
}

export function LocaleDate(separator: string='-'){
    return new Date().toLocaleDateString([], {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).split('/').join(separator);
}

