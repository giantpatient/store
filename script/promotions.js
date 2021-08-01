var pid;
// var itemBtn = document.getElementById("itemsBtn");
// itemBtn.style.display = 'none';
var submitBtn;
var colorBtn;
var borderBtn;

var promoType;
var onValue;
//var hiddenI;);
//var hiddenN;mes");
var privacy;
var validFrom;
var validTo;

var EditAddOns = document.getElementById("EditAddOns");

function closeItems() {
  document.getElementById("EditAddOns").style.display = "none";
  // document.getElementById("EditAddOnsDiv").innerHTML = "";

  EditAddOns.style.display = "none";
}

function fetchItems(value) {
  console.log(value);
  console.log("changed");

  if (value == "category") {
    document.getElementById("itemsBtn").style.display = "inline";
    document.getElementById("itemsBtn").innerHTML = "Select categories";
    //document.getElementById("EditAddOns").style.display = "none";
    EditAddOns.style.display = "none";
  } else if (value == "items") {
    document.getElementById("itemsBtn").style.display = "inline";
    document.getElementById("itemsBtn").innerHTML = "Select items";
    //document.getElementById("EditAddOns").style.display = "none";
    EditAddOns.style.display = "none";
  } else if (value == "cahCategory") {
    document.getElementById("itemsBtn").style.display = "inline";
    document.getElementById("itemsBtn").innerHTML = "Select CAH categories";
    EditAddOns.style.display = "none";
  } else if (value == "cahItems") {
    document.getElementById("itemsBtn").style.display = "inline";
    document.getElementById("itemsBtn").innerHTML = "Select CAH items";
    EditAddOns.style.display = "none";
  } else {
    document.getElementById("itemsBtn").style.display = "none";
    //document.getElementById("EditAddOns").style.display = "none";
    EditAddOns.style.display = "none";
    removeItem();
  }
}

function clickAll(id) {
  var AddOns = document.getElementsByClassName(id);
  var checkbox = document.getElementById(id);

  if (checkbox.checked === true) {
    for (i = 0; i < AddOns.length; i++) {
      AddOns[i].checked = true;
    }
  } else if (checkbox.checked === false) {
    for (i = 0; i < AddOns.length; i++) {
      AddOns[i].checked = false;
    }
  }
}

function showItems() {
  //send request to populate modal
  //    onValue = document.getElementById("on");
  document.getElementById("EditAddOns").style.display = "block";
}

function PassEditedAddOns() {
  var onValue = document.getElementById("on").value;
  var classes = document.getElementsByClassName("checkboxCat");

  // var testing = 0;

  // for (c = 0; c < classes.length; c++) {
  //     if (classes[c].checked === true) {
  //         testing++;
  //         break;
  //     }
  // }

  // insert div here

  var checkedOrNot = 0;

  for (i = 0; i < classes.length; i++) {
    if (classes[i].checked == true) {
      checkedOrNot = 1;
      //console.log(idField.value)
    } else {
      continue;
    }
  }

  if (checkedOrNot == 0) {
    alert("Please select promo categories/items.");
    return;
  }

  var PassedIDsDiv = document.getElementById("ids");
  console.log(PassedIDsDiv);
  PassedIDsDiv.innerHTML = "";
  console.log(PassedIDsDiv);

  PassedIDsDiv.insertAdjacentHTML(
    "beforeend",
    "<fieldset id='promoItemsFieldSet'><input type='hidden' id='hiddenIds'><input type='hidden' id='hiddenNames'><label id='promoStuff'></label></fieldset>"
  );

  var idField = document.getElementById("hiddenIds");
  var nameField = document.getElementById("hiddenNames");

  var fieldset = document.getElementById("promoStuff");
  fieldset.innerHTML = "";

  for (i = 0; i < classes.length; i++) {
    if (classes[i].checked == true) {
      var id = classes[i].id;
      var name = classes[i].name;
      idField.value += id + ",";
      nameField.value += name + ", ";
      fieldset.insertAdjacentHTML("beforeend", name + ", ");

      // checkedOrNot = 1;
      // console.log(idField.value)
    } else {
      continue;
    }
  }

  // if (checkedOrNot == 0) {
  //     return;
  // }

  var preEdit = idField.value;
  //var field = document.getElementById(idField);
  var postEdit = preEdit.slice(0, -1);
  idField.value = postEdit;

  var preEditNames = nameField.value;
  //var fieldName = document.getElementById(nameField);
  var postEditNames = preEditNames.slice(0, -2);
  nameField.value = postEditNames;

  var prefieldset = fieldset.innerHTML;
  var postfieldset = prefieldset.slice(0, -2);
  fieldset.innerHTML = postfieldset;

  fieldset.insertAdjacentHTML(
    "beforeend",
    "<br><button type='button' onclick='removeItem()'>x</button>"
  );

  closeItem();
}

function closeItem() {
  document.getElementById("EditAddOns").style.display = "none";
}

function removeItem() {
  var fieldset = document.getElementById("promoItemsFieldSet");

  if (fieldset) {
    fieldset.outerHTML = "";
  }
}

function checkPrivacy(id) {
  console.log(id);

  var promoCode = document.getElementsByClassName("promoCode");

  if (id == "public") {
    for (g = 0; g < promoCode.length; g++) {
      promoCode[g].style.display = "none";
    }
  } else if (id == "private") {
    for (g = 0; g < promoCode.length; g++) {
      promoCode[g].style.display = "inline";
    }
  }
}
