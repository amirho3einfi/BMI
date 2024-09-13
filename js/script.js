let fName_input = document.querySelector("#f-name");
let lName_input = document.querySelector("#l-name");
let ghad_input = document.querySelector("#ghad");
let vazn_input = document.querySelector("#vazn");
let submit_Btn = document.querySelector("#submit");
let user_answer_con = document.querySelector("#user-answer-con");
let name_user_show = document.querySelector("#name-user-show");
let ghad_h = document.querySelector("#ghad-h");
let vazn_h = document.querySelector("#vazn-h");
let bmi_value_show = document.querySelector("#bmi-value-show");
let bmi_screen_show = document.querySelector("#bmi-screen-show");
let try_Btn = document.querySelector("#try-Btn");

function isAllLetters(str) {
  return /^[\p{L}\s]+$/u.test(str);
}

function isAllNumber(num) {
  return !isNaN(num);
}

submit_Btn.addEventListener("click", () => {
  if (
    lName_input.value != "" &&
    fName_input.value != "" &&
    ghad_input.value != ""  &&
    vazn_input.value != ""
  ) {



    
    
    
    
    
    
    
    
    vazn_input.classList.remove("border-[2px]");
    lName_input.classList.remove("border-[2px]");
    ghad_input.classList.remove("border-[2px]");
    fName_input.classList.remove("border-[2px]");








    setTimeout(() => {
      if (
        isAllLetters(lName_input.value) == true &&
        isAllLetters(fName_input.value) == true &&
        isAllNumber(ghad_input.value) == true &&
        isAllNumber(vazn_input.value) == true
      ) {



    if (ghad_input.value>=5 &&ghad_input.value<=250 && vazn_input.value>=10 &&vazn_input.value<=300) {
      
      
      
      

      
      
        name_user_show.innerHTML =
          `${fName_input.value}` + " " + `${lName_input.value} عزیز`;

        let bmi = (vazn_input.value / (ghad_input.value / 100) ** 2).toFixed(3);
        ghad_h.innerHTML = ghad_h.innerText =
        "قد : " + `<span class="text-gray-300">${ghad_input.value}</span>`;
        vazn_h.innerHTML = vazn_h.innerText =
          "وزن : " + `<span class="text-gray-300">${vazn_input.value}</span>`;
          
        if (bmi <= 18.5 && bmi >= 10) {
          user_answer_con.classList.remove("hidden");
          user_answer_con.classList.add("flex");
          bmi_value_show.innerHTML = bmi_value_show.innerText.concat(
            `<p>BMI :  <span class="text-yellow-400">${bmi}</span></p>`
          );
          bmi_screen_show.innerHTML = `<p>بیش از حد لاغر</p>`;
          bmi_screen_show.classList.add("bg-yellow-400");
        } else if (bmi > 18.5 && bmi <= 25) {
          user_answer_con.classList.remove("hidden");
          user_answer_con.classList.add("flex");
          bmi_value_show.innerHTML = bmi_value_show.innerText.concat(
            `<p>BMI :  <span class="text-green-600">${bmi}</span></p>`
          );
          bmi_screen_show.innerHTML = `<p>نرمال</p>`;
          bmi_screen_show.classList.add("bg-green-600");
        } else if (bmi > 25 && bmi <= 30) {
          user_answer_con.classList.remove("hidden");
          user_answer_con.classList.add("flex");
          bmi_value_show.innerHTML = bmi_value_show.innerText.concat(
            `<p>BMI :  <span class="text-orange-500">${bmi}</span></p>`
          );
          bmi_screen_show.innerHTML = `<p>اضافه وزن</p>`;
          bmi_screen_show.classList.add("bg-orange-500");
        } else if (bmi > 25 && bmi <= 100) {
          user_answer_con.classList.remove("hidden");
          user_answer_con.classList.add("flex");
          bmi_value_show.innerHTML = bmi_value_show.innerText.concat(
            `<p>BMI :  <span class="text-red-600">${bmi}</span></p>`
          );
          bmi_screen_show.innerHTML = `<p>اضافه وزن شدید</p>`;
          bmi_screen_show.classList.add("bg-red-600");
        }
        else{
          alert("شاخص شما قابل اندازه گیری نمی باشد")
        }
      }
      else if ((ghad_input.value<5 ||ghad_input.value>250)&&(vazn_input.value>=10 &&vazn_input.value<=300)) {
        ghad_input.classList.add("border-[2px]");
        ghad_input.classList.add("border-red-600");
        setTimeout(() => {
        alert("قد باید بین 5 تا 250 سانتی متر باشد")
          
        }, 100);
        
      }
      else if((ghad_input.value>=5 &&ghad_input.value<=250)&&(vazn_input.value<10 ||vazn_input.value>300)){
        vazn_input.classList.add("border-[2px]");
        vazn_input.classList.add("border-red-600");


        setTimeout(() => {
  alert("وزن باید بین 10 تا 300 کیلو باشد")
          
        }, 100);
      }
        
        
        else {
          vazn_input.classList.add("border-[2px]");
        ghad_input.classList.add("border-[2px]");
        ghad_input.classList.add("border-red-600");
        vazn_input.classList.add("border-red-600");
setTimeout(() => {
  alert("قد باید بین 5 تا 250 سانتی متر باشد و وزن باید بین 10 تا 300 کیلو باشد");
  
}, 100);
        }
      }
      
      
      else if (
        isAllLetters(fName_input.value) == false &&
        isAllLetters(lName_input.value) == true &&
        isAllNumber(ghad_input.value) == true &&
        isAllNumber(vazn_input.value) == true
      ) {
        fName_input.classList.add("border-[2px]");
        fName_input.classList.add("border-red-600");
        
        lName_input.classList.remove("border-[2px]");
        vazn_input.classList.remove("border-[2px]");
        ghad_input.classList.remove("border-[2px]");
      

        setTimeout(() => {
          alert("نام خود را به حروف وارد کنید");
        }, 100);
      } 
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      else if (
        isAllLetters(fName_input.value) == true &&
        isAllLetters(lName_input.value) == false &&
        isAllNumber(ghad_input.value) == true &&
        isAllNumber(vazn_input.value) == true
      ) {
        lName_input.classList.add("border-[2px]");
        lName_input.classList.add("border-red-600");

        fName_input.classList.remove("border-[2px]");
        vazn_input.classList.remove("border-[2px]");
        ghad_input.classList.remove("border-[2px]");

        setTimeout(() => {
          alert("نام خانوادگی خود را به حروف وارد کنید");
        }, 100);
      } else if (
        isAllLetters(fName_input.value) == false &&
        isAllLetters(lName_input.value) == false &&
        isAllNumber(ghad_input.value) == true &&
        isAllNumber(vazn_input.value) == true
      ) {
        lName_input.classList.add("border-[2px]");
        lName_input.classList.add("border-red-600");
        fName_input.classList.add("border-[2px]");
        fName_input.classList.add("border-red-600");

        vazn_input.classList.remove("border-[2px]");
        ghad_input.classList.remove("border-[2px]");

        setTimeout(() => {
          alert("نام و نام خانوادگی خود را به حروف وارد کنید");
        }, 100);
      } else if (
        isAllLetters(lName_input.value) == true &&
        isAllLetters(fName_input.value) == true &&
        isAllNumber(ghad_input.value) == false &&
        ghad_input.value * 1 != ghad_input.value &&
        isAllNumber(vazn_input.value) == true
      ) {
        ghad_input.classList.add("border-[2px]");
        ghad_input.classList.add("border-red-600");

        fName_input.classList.remove("border-[2px]");
        vazn_input.classList.remove("border-[2px]");
        lName_input.classList.remove("border-[2px]");

        setTimeout(() => {
          alert("قد خود را به عدد وارد کنید");
        }, 100);
      } else if (
        isAllLetters(lName_input.value) == true &&
        isAllLetters(fName_input.value) == true &&
        isAllNumber(ghad_input.value) == true &&
        isAllNumber(vazn_input.value) == false &&
        vazn_input.value * 1 != vazn_input.value
      ) {
        vazn_input.classList.add("border-[2px]");
        vazn_input.classList.add("border-red-600");

        fName_input.classList.remove("border-[2px]");
        ghad_input.classList.remove("border-[2px]");
        lName_input.classList.remove("border-[2px]");

        setTimeout(() => {
          alert("وزن خود را به عدد وارد کنید");
        }, 100);
      } else if (
        isAllLetters(lName_input.value) == true &&
        isAllLetters(fName_input.value) == true &&
        isAllNumber(ghad_input.value) == false &&
        ghad_input.value * 1 != ghad_input.value &&
        isAllNumber(vazn_input.value) == false &&
        vazn_input.value * 1 != vazn_input.value
      ) {
        vazn_input.classList.add("border-[2px]");
        ghad_input.classList.add("border-[2px]");
        ghad_input.classList.add("border-red-600");
        vazn_input.classList.add("border-red-600");

        fName_input.classList.remove("border-[2px]");

        lName_input.classList.remove("border-[2px]");

        setTimeout(() => {
          alert("قد و وزن خود را به عدد وارد کنید");
        }, 100);
      } else {
        alert("نام و نام خانوادگی را با حروف و قد و وزن را با عدد وارد کنید");
      }
    }, 100);
  
  
  
}
  
  
  
  else if (
    lName_input.value == "" &&
    fName_input.value != "" &&
    ghad_input.value != "" &&
    vazn_input.value != ""
  ) {
    lName_input.classList.add("border-[2px]");
    lName_input.classList.add("border-red-600");

    fName_input.classList.remove("border-[2px]");
    vazn_input.classList.remove("border-[2px]");
    ghad_input.classList.remove("border-[2px]");

    setTimeout(() => {
      alert("نام خانوادگی خود را وارد کنید");
    }, 100);
  } else if (
    lName_input.value != "" &&
    fName_input.value == "" &&
    ghad_input.value != "" &&
    vazn_input.value != ""
  ) {
    fName_input.classList.add("border-[2px]");
    fName_input.classList.add("border-red-600");

    lName_input.classList.remove("border-[2px]");
    vazn_input.classList.remove("border-[2px]");
    ghad_input.classList.remove("border-[2px]");
    setTimeout(() => {
      alert("نام  خود را وارد کنید");
    }, 100);
  } else if (
    lName_input.value != "" &&
    fName_input.value != "" &&
    ghad_input.value == "" &&
    vazn_input.value != ""
  ) {
    ghad_input.classList.add("border-[2px]");
    ghad_input.classList.add("border-red-600");

    lName_input.classList.remove("border-[2px]");
    vazn_input.classList.remove("border-[2px]");
    fName_input.classList.remove("border-[2px]");
    setTimeout(() => {
      alert("قد خود را وارد کنید");
    }, 100);
  } else if (
    lName_input.value != "" &&
    fName_input.value != "" &&
    ghad_input.value != "" &&
    vazn_input.value == ""
  ) {
    vazn_input.classList.add("border-[2px]");
    vazn_input.classList.add("border-red-600");

    lName_input.classList.remove("border-[2px]");
    ghad_input.classList.remove("border-[2px]");
    fName_input.classList.remove("border-[2px]");
    setTimeout(() => {
      alert("وزن خود را وارد کنید");
    }, 100);
  } else {
    vazn_input.classList.remove("border-[2px]");
    lName_input.classList.remove("border-[2px]");
    ghad_input.classList.remove("border-[2px]");
    fName_input.classList.remove("border-[2px]");
    setTimeout(() => {
      alert("فیلد های خالی را پر کنید");
    }, 100);
  }
});

try_Btn.addEventListener("click", () => {
  user_answer_con.classList.remove("flex");
  user_answer_con.classList.add("hidden");
  bmi_value_show.innerHTML = bmi_value_show.innerText = "";
  bmi_screen_show.innerHTML = "";


  fName_input.value="";
  lName_input.value = "";
  ghad_input.value = "";
  vazn_input.value = "";

  bmi_screen_show.classList.remove("bg-yellow-400");
  bmi_screen_show.classList.remove("bg-green-600");
  bmi_screen_show.classList.remove("bg-red-600");
  bmi_screen_show.classList.remove("bg-orange-500");
});
