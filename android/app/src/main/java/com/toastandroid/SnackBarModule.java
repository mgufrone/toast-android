package com.toastandroid;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by gufy on 2/27/17.
 */

public class SnackBarModule extends ReactContextBaseJavaModule {
    public SnackBarModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void setText(String message){

    }

    @Override
    public String getName() {
        return "Snackbar";
    }
}
