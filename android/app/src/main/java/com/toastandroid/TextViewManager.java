package com.toastandroid;

import android.app.Activity;
import android.support.annotation.Nullable;
import android.util.Log;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.ViewFlipper;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.text.ReactTextShadowNode;
import com.facebook.react.views.text.ReactTextView;

/**
 * Created by gufy on 3/1/17.
 */

public class TextViewManager extends BaseViewManager<ReactTextView, ReactTextShadowNode> {
    static String REACT_CLASS = "TextViewAndroid";
    static String TAG = TextViewManager.class.getSimpleName();
    private ReactApplicationContext mCallerContext;
    private Activity mActivity;
    public TextViewManager(ReactApplicationContext context) {
        super();
        mCallerContext = context;
        mActivity = context.getCurrentActivity();
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }
    @Override
    protected ReactTextView createViewInstance(ThemedReactContext reactContext) {
        return new ReactTextView(reactContext);
    }
    @SuppressWarnings("unused")
    @ReactProp(name = "text")
    public void setText(ReactTextView view, String text){
        Log.d(TAG, "setText: " + text);
        view.setText(text);
    }

    @Override
    protected void onAfterUpdateTransaction(ReactTextView view) {
        super.onAfterUpdateTransaction(view);
        view.updateView();
    }

    @Override
    public ReactTextShadowNode createShadowNodeInstance() {
        return new ReactTextShadowNode();
    }

    @Override
    public Class<ReactTextShadowNode> getShadowNodeClass() {
        return ReactTextShadowNode.class;
    }

    @Override
    public void updateExtraData(ReactTextView root, Object extraData) {

    }
}
