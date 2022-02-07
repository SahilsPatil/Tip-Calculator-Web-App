let tip_amount = 0.00;
let tipmoney2 = 0.00;
let finalbill = 0.00;
let total_amount = 0.00;


function finalbill_calcu() {
    finalbill = bill.value / people.value;
}
function tip_calc() {
    finalbill_calcu();
    tip_amount = finalbill * tipmoney2 / 100;
}
function total_amount_calu() {
    tip_calc()
    total_amount = finalbill + tip_amount;
}
function refresh() {
    total_amount_calu();
    if (tip_amount == 0) {
        tip.innerHTML = `$0.00`;
    } else {
        tip.innerHTML = `$${tip_amount.toFixed(2)}`;
    }
    total.innerHTML = `$${total_amount.toFixed(2)}`;
}
function output_reset() {
    total.innerHTML = `$0.00`;
    tip.innerHTML = `$0.00`;
}
function display_error() {
    error.style.display = "block";
    lable_people.style.border = "2px solid red"
    output_reset();
}
function hide_error() {
    error.style.display = "none";
    lable_people.style.border = "none";
}
function active_reset() {
    reset_btn.style.opacity = "1";
    reset_btn.style.color = "var(--very_dark_cyan)";
}
function unactive_reset() {
    reset_btn.style.opacity = "0.3";
    reset_btn.style.color = "var(--Dark_grayish_cyan)";
    reset_btn.style.background = "var(--strong_cyan)";
}
function display_output() {
    hide_error();
    output_reset();
    total_amount_calu();
    refresh();
    active_reset();
}




bill.addEventListener("input", () => {
    if (parseInt(people.value) == "0") {
        display_error()
    }
    else if (people.value == "" || bill.value == "" || parseInt(bill.value) == "0") {
        output_reset();
        hide_error();
        unactive_reset();
    }
    else {
        display_output();
    }

});



people.addEventListener("input", () => {
    if (parseInt(people.value) == "0") {
        display_error()
    }
    else if (people.value == "" || bill.value == "" || parseInt(bill.value) == "0") {
        output_reset();
        hide_error();
        unactive_reset();
    }
    else {
        display_output();
    }
});



custom.addEventListener("input", () => {
    if (parseInt(people.value) == "0") {
        display_error()
    }
    else if (people.value == "" || bill.value == "" || parseInt(bill.value) == "0") {
        output_reset();
        hide_error();
        unactive_reset();
    }
    else {
        tipmoney2 = custom.value;
        tip_calc();
        display_output();
    }
    
});



function tipbtn(tipmoney) {
    if (parseInt(people.value) == "0") {
        display_error()
    }
    else if (people.value == "" || bill.value == "" || parseInt(bill.value) == "0") {
        output_reset();
        hide_error();
        unactive_reset();
    }
    else {
        tipmoney2 = tipmoney
        tip_calc();
        display_output();
        custom.value = "";
    }

}


reset_btn.addEventListener("click", () => {
    tip_amount = 0.00;
    total.innerHTML = `$0.00`;
    tip.innerHTML = `$0.00`;
    bill.value = ""
    people.value = ""
})


















