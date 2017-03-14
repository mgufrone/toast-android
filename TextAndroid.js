import {PropTypes} from 'react';
import {requireNativeComponent, View} from 'react-native';

var iface = {
  name: 'TextViewAndroid',
  propTypes: {
      text: PropTypes.string,
    ellipsizeMode: PropTypes.oneOf(['head', 'middle', 'tail', 'clip']),
    /**
     * Used to truncate the text with an ellipsis after computing the text
     * layout, including line wrapping, such that the total number of lines
     * does not exceed this number.
     *
     * This prop is commonly used with `ellipsizeMode`.
     */
    numberOfLines: PropTypes.number,
    /**
     * Set text break strategy on Android API Level 23+, possible values are `simple`, `highQuality`, `balanced`
     * The default value is `highQuality`.
     * @platform android
     */
    textBreakStrategy: PropTypes.oneOf(['simple', 'highQuality', 'balanced']),
    /**
     * Invoked on mount and layout changes with
     *
     *   `{nativeEvent: {layout: {x, y, width, height}}}`
     */
    onLayout: PropTypes.func,
    /**
     * This function is called on press.
     *
     * e.g., `onPress={() => console.log('1st')}`
     */
    onPress: PropTypes.func,
    /**
     * This function is called on long press.
     *
     * e.g., `onLongPress={this.increaseSize}>`
     */
    onLongPress: PropTypes.func,
    /**
     * When the scroll view is disabled, this defines how far your touch may
     * move off of the button, before deactivating the button. Once deactivated,
     * try moving it back and you'll see that the button is once again
     * reactivated! Move it back and forth several times while the scroll view
     * is disabled. Ensure you pass in a constant to reduce memory allocations.
     */
    /**
     * Lets the user select text, to use the native copy and paste functionality.
     */
    selectable: PropTypes.bool,
    /**
     * The highlight color of the text.
     * @platform android
     */
    /**
     * When `true`, no visual change is made when text is pressed down. By
     * default, a gray oval highlights the text on press down.
     * @platform ios
     */
    suppressHighlighting: PropTypes.bool,
    /**
     * Used to locate this view in end-to-end tests.
     */
    testID: PropTypes.string,
    /**
     * Specifies whether fonts should scale to respect Text Size accessibility settings. The
     * default is `true`.
     */
    allowFontScaling: PropTypes.bool,
    /**
     * When set to `true`, indicates that the view is an accessibility element. The default value
     * for a `Text` element is `true`.
     *
     * See the
     * [Accessibility guide](docs/accessibility.html#accessible-ios-android)
     * for more information.
     */
    accessible: PropTypes.bool,
    /**
     * Specifies whether font should be scaled down automatically to fit given style constraints.
     * @platform ios
     */
    adjustsFontSizeToFit: PropTypes.bool,

    /**
     * Specifies smallest possible scale a font can reach when adjustsFontSizeToFit is enabled. (values 0.01-1.0).
     * @platform ios
     */
    minimumFontScale: PropTypes.number,
    ...View.propTypes // include the default view properties
  },
};

export default requireNativeComponent("TextViewAndroid", iface);