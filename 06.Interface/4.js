var Composite = new Interface('Composite', ['add', 'remove', 'getChild']);
var FormItem = new Interface('FormItem', ['save']);

var CompositeForm = function(id, method, action) {
};

CompositeForm.prototype.add = function(child) {};

CompositeForm.prototype.remove = function(child) {};

CompositeForm.prototype.getChild = function(child) {};

CompositeForm.prototype.save = function(child) {};

function addForm(formInstance) {
    Interface.ensureImplements(formInstance, Composite, FormItem);
    /* do something */
}
