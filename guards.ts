//typeof
function strip(x: string | number) {
    if(typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim()
}

//instanceof
class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    message = 'error message'
}

function handel(res: MyResponse | MyError) {
    if(res instanceof MyResponse) {
        return { info: res.header + res.result }
    } else {
        return { info: res.header + res.message }
    }
}

//type
type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
    //....
}

setAlertType('success')
setAlertType('warning')
//setAlertType('default') //error type is not exist on AlertType