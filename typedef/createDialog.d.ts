declare module DialogService {


    export interface CreateDialogOptions {
        id?: string;
        title?: string;
        backdrop?: boolean;
        success?: {label: string; fn: Function};
        onClose?: () => any;
        controller?: string;
        backdropClass?: string;
        modalClass?: string;
        css?: any;
        cancellable?: boolean;
        searchUrl?: {key: string; value: string};
        scope?: ng.IScope
    }
    
    export interface DialogScope extends ng.IScope {
        $modalCancel: () => void;
        $modalSuccess: (data?: any) => void;
    }
    
    export interface CreateDialog {
        (template:any, options: CreateDialogOptions, passedInLocals?: any): Function
    }


}
