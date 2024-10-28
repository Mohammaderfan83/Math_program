function falsePositionMethod(func, start, end, epsilon) {
    let iterations = 0;
    let root = start;
    const f = new Function("x", "return " + func);

    if (f(start) * f(end) >= 0) {
        document.getElementById("result").innerText = "مقدار تابع در شروع و پایان بازه باید دارای علامت‌های مخالف باشد.";
        return;
    }

    while (Math.abs(f(root)) > epsilon) {
        root = start - (f(start) * (end - start)) / (f(end) - f(start));
        iterations++;

        if (f(start) * f(root) < 0) {
            end = root;
        } else {
            start = root;
        }

        if (Math.abs(end - start) < epsilon) break;
    }

    document.getElementById("result").innerHTML = `ریشه معادله: ${root.toFixed(3)}<br>تعداد تکرارها: ${iterations}`;
}

function calculateRoot() {
    const func = document.getElementById("func").value;
    const start = parseFloat(document.getElementById("start").value);
    const end = parseFloat(document.getElementById("end").value);
    const epsilon = parseFloat(document.getElementById("epsilon").value);
    if(func && start && end && epsilon){
        falsePositionMethod(func, start, end, epsilon);
    }else{
        alert('لطفا تمامی فیلدها را کامل کنید')
    }

    
}