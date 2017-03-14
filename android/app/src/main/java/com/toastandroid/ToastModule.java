package com.toastandroid;

import android.content.Context;
import android.widget.Toast;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by gufy on 2/27/17.
 */

public class ToastModule extends ReactContextBaseJavaModule {
    public static String DURATION_TOAST_SHORT = "short";
    public static String DURATION_TOAST_LONG = "long";
    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void show(String message, int duration){
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }
    @ReactMethod
    public void fetchSomething(Promise promise){
        promise.resolve("Hello");
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_TOAST_LONG, Toast.LENGTH_LONG);
        constants.put(DURATION_TOAST_SHORT, Toast.LENGTH_SHORT);
        return constants;
    }

    @Override
    public String getName() {
        return "ToastModule";
    }
}
