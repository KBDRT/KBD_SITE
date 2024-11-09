// const DEPENDS = new Map();
// DEPENDS.set("buyer-type-company", ["buyer-type-person"]);
// DEPENDS.set("buyer-type-person",  ["buyer-type-company"]);
// DEPENDS.set("receive-pickup", ["receive-delivery"]);
// DEPENDS.set("receive-delivery", ["receive-pickup"]);
// DEPENDS.set("payment-online",  ["payment-offline", "payment-credit"]);
// DEPENDS.set("payment-offline", ["payment-online", "payment-credit"]);
// DEPENDS.set("payment-credit", ["payment-online", "payment-offline"]);


function ChangeBorder(evt)
{
    
    let div_name =  evt.getAttribute("id");
    let class_list = evt.classList;
    let index = div_name.indexOf("-");
    if (index < 0)
        return;

    let prefix = div_name.substring(0, index);
    let elements = document.getElementsByName(prefix);

    if (!class_list.contains("border--selected"))
    {
        elements.forEach(element => {
            element.classList.remove("border--selected");
        });

        class_list.add("border--selected");
    }
}