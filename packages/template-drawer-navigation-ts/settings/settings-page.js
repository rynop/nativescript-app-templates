"use strict";
var settings_view_model_1 = require("./settings-view-model");
var view = require("ui/core/view");
var page;
// Event handler for Page "navigatingTo" event attached in tabs-page.xml
function onNavigatingTo(args) {
    /*
    This gets a reference this page’s <StackLayout> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    page = args.object;
    page.bindingContext = new settings_view_model_1.SettingsViewModel();
}
exports.onNavigatingTo = onNavigatingTo;
function onOpenDrawerTap() {
    var sideDrawer = view.getViewById(page, "sideDrawer");
    sideDrawer.showDrawer();
}
exports.onOpenDrawerTap = onOpenDrawerTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRpbmdzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLDZEQUEwRDtBQUcxRCxtQ0FBc0M7QUFFdEMsSUFBSSxJQUFJLENBQUM7QUFDVCx3RUFBd0U7QUFDeEUsd0JBQStCLElBQWU7SUFDMUM7Ozs7TUFJRTtJQUNGLElBQUksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSx1Q0FBaUIsRUFBRSxDQUFDO0FBQ2xELENBQUM7QUFSRCx3Q0FRQztBQUVEO0lBQ0ksSUFBSSxVQUFVLEdBQWtCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3JFLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUM1QixDQUFDO0FBSEQsMENBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBEcmF3ZXJQYWdlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9kcmF3ZXJwYWdlJztcclxuaW1wb3J0IHsgU2V0dGluZ3NWaWV3TW9kZWwgfSBmcm9tICcuL3NldHRpbmdzLXZpZXctbW9kZWwnO1xyXG5cclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXInO1xyXG5pbXBvcnQgdmlldyA9IHJlcXVpcmUoXCJ1aS9jb3JlL3ZpZXdcIik7XHJcblxyXG52YXIgcGFnZTtcclxuLy8gRXZlbnQgaGFuZGxlciBmb3IgUGFnZSBcIm5hdmlnYXRpbmdUb1wiIGV2ZW50IGF0dGFjaGVkIGluIHRhYnMtcGFnZS54bWxcclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG4gICAgLypcclxuICAgIFRoaXMgZ2V0cyBhIHJlZmVyZW5jZSB0aGlzIHBhZ2XigJlzIDxTdGFja0xheW91dD4gVUkgY29tcG9uZW50LiBZb3UgY2FuXHJcbiAgICB2aWV3IHRoZSBBUEkgcmVmZXJlbmNlIG9mIHRoZSBQYWdlIHRvIHNlZSB3aGF04oCZcyBhdmFpbGFibGUgYXRcclxuICAgIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FwaS1yZWZlcmVuY2UvY2xhc3Nlcy9fdWlfcGFnZV8ucGFnZS5odG1sXHJcbiAgICAqL1xyXG4gICAgcGFnZSA9IDxEcmF3ZXJQYWdlPmFyZ3Mub2JqZWN0O1xyXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBTZXR0aW5nc1ZpZXdNb2RlbCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25PcGVuRHJhd2VyVGFwKCkge1xyXG4gICAgbGV0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj52aWV3LmdldFZpZXdCeUlkKHBhZ2UsIFwic2lkZURyYXdlclwiKTtcclxuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG59Il19