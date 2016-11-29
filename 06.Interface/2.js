/*
interface Composite {
    function add(child);
    function remove(child);
    function getChild(index);
}

interface FormItem {
    function save();
}
*/

var CompositeForm = function(id, method, action) {
    this.implementsInterfaces = ['Composite', 'FormItem'];
};

CompositeForm.prototype.add = function(child) {
};

CompositeForm.prototype.remove = function(child) {
};

CompositeForm.prototype.getChild = function(child) {
};

CompositeForm.prototype.save = function(child) {
};

function addForm(formInstance) {
    if(!implements(formInstance, 'Composite', 'FormItem')) {
        throw new Error('Object does not implement a required interface.');
    }
}

function implements(object) {
    for(var i = 1; i < arguments.length; i++) {
        var interfaceName = arguments[i];
        var interfaceFound = false;
        for(var j = 0; j < object.implementsInterfaces.length; j++) {
            if(object.implementsInterfaces[j] == interfaceName) {
                interfaceFound = true;
                break;
            }
        }
        if(!interfaceFound) {
            return false;
        }
    }
    return true;
}
