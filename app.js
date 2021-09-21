

let link=document.body.getElementsByClassName("nav-item");

for (let i=0; i<link.length; i++) {
    link[i].addEventListener("click", function () {
        let current=document.getElementsByClassName("active");


        if (current.length>0) {
            current[0].className=current[0].className.replace(" active", "");
        }


        this.className+=" active";
    });

}

const hov=document.querySelectorAll(".hov");


for (let i=0; i<hov.length; i++) {
    hov[i].addEventListener("click", function () {
        let curren=document.getElementsByClassName("act");


        if (curren.length>0) {
            curren[0].className=curren[0].className.replace(" act", "");
        }


        this.className+=" act";
    });

}

const activa=document.querySelectorAll(".card");

for (let i=0; i<activa.length; i++) {
    activa[i].addEventListener("click", function () {
        let curren=document.getElementsByClassName("activa");


        if (curren.length>0) {
            curren[0].className=curren[0].className.replace(" activa", "");
        }


        this.className+=" activa";
    });

}

const activ=document.querySelector(".content");


const displaynone=document.querySelector(".displaynone");
const displaycard=document.querySelector(".displaycard");




function cardon() {

    displaycard.style.display="block";
    displaynone.style.display="none";





}







function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val=this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus=-1;
        /*create a DIV element that will contain the items (values):*/
        a=document.createElement("DIV");
        a.setAttribute("id", this.id+"autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i=0; i<arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase()==val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b=document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML="<strong>"+arr[i].substr(0, val.length)+"</strong>";
                b.innerHTML+=arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML+="<input type='hidden' value='"+arr[i]+"'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value=this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x=document.getElementById(this.id+"autocomplete-list");
        if (x) x=x.getElementsByTagName("div");
        if (e.keyCode==40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode==38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode==13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus>-1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus>=x.length) currentFocus=0;
        if (currentFocus<0) currentFocus=(x.length-1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i=0; i<x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x=document.getElementsByClassName("autocomplete-items");
        for (var i=0; i<x.length; i++) {
            if (elmnt!=x[i]&&elmnt!=inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

/*An array containing all the country names in the world:*/
var jobs=["developer", "java developer", "python developer", "work from home", "part time job"]
var countries=["uttar pradesh ", "bangalore", "chennai", "orrissa", "haryana"]
/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), jobs);

const click=document.querySelector(".clickable");

click.addEventListener("click", () => {
    displaycard.style.display="none";
    displaynone.style.display="block";
})











function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val=this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus=-1;
        /*create a DIV element that will contain the items (values):*/
        a=document.createElement("DIV");
        a.setAttribute("id", this.id+"autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i=0; i<arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase()==val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b=document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML="<strong>"+arr[i].substr(0, val.length)+"</strong>";
                b.innerHTML+=arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML+="<input type='hidden' value='"+arr[i]+"'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value=this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x=document.getElementById(this.id+"autocomplete-list");
        if (x) x=x.getElementsByTagName("div");
        if (e.keyCode==40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode==38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode==13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus>-1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus>=x.length) currentFocus=0;
        if (currentFocus<0) currentFocus=(x.length-1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i=0; i<x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x=document.getElementsByClassName("autocomplete-items");
        for (var i=0; i<x.length; i++) {
            if (elmnt!=x[i]&&elmnt!=inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

autocomplete(document.getElementById("myInput1"), countries);

function openNav() {
    document.getElementById("navbarSupportedContent").style.width="250px";
}

function closeNav() {
    document.getElementById("navbarSupportedContent").style.width="0";
}



$(function () {
    //add BT DD show event
    $(".dropdown").on("show.bs.dropdown", function () {
        var $btnDropDown=$(this).find(".dropdown-toggle");
        var $listHolder=$(this).find(".dropdown-menu");
        //reset position property for DD container
        $(this).css("position", "static");
        $listHolder.css({
            "top": ($btnDropDown.offset().top+$btnDropDown.outerHeight(true))+"px",
            "left": $btnDropDown.offset().left+"px"
        });
        $listHolder.data("open", true);
    });
    //add BT DD hide event
    $(".dropdown").on("hidden.bs.dropdown", function () {
        var $listHolder=$(this).find(".dropdown-menu");
        $listHolder.data("open", false);
    });
    //add on scroll for table holder
    $(".ak-holder").scroll(function () {
        var $ddHolder=$(this).find(".dropdown")
        var $btnDropDown=$(this).find(".dropdown-toggle");
        var $listHolder=$(this).find(".dropdown-menu");
        if ($listHolder.data("open")) {
            $listHolder.css({
                "top": ($btnDropDown.offset().top+$btnDropDown.outerHeight(true))+"px",
                "left": $btnDropDown.offset().left+"px"
            });
            $ddHolder.toggleClass("open", ($btnDropDown.offset().left>$(this).offset().left))
        }
    })
});