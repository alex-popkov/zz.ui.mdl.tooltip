/**
 * @fileoverview Provide zz.ui.mdl.tooltip base object.
 * @license Apache-2.0
 * @author popkov.aleksander@gmail.com (Popkov Alexander)
 */

goog.provide( 'zz.ui.mdl.tooltip' );

goog.require( 'zz.ui.mdl.tooltip.tpl' );
goog.require( 'zz.ui.mdl.Tooltip' );
/**
 * Base namespace for zz.ui.mdl.tooltip module.
 * @const
 */
zz.ui.mdl.tooltip = zz.ui.mdl.tooltip || { };

/**
 * Bootstrap module method.
 */
zz.ui.mdl.tooltip.bootstrap = function( ){


    goog.ui.registry.setDecoratorByClassName( zz.ui.mdl.Tooltip.CSS_CLASS, function( ){

        return new zz.ui.mdl.Tooltip( );
    } );

    soy.renderElement( goog.dom.getElement( 'root' ), zz.ui.mdl.tooltip.tpl.default );
	var tt1 = new zz.ui.mdl.Tooltip( );
		tt1.decorate( goog.dom.getElement( 'tt-1' ) );
	var tt2 = new zz.ui.mdl.Tooltip( );
		tt2.decorate( goog.dom.getElement( 'tt-2' ) );
	var tt3 = new zz.ui.mdl.Tooltip( );
		tt3.decorate( goog.dom.getElement( 'tt-3' ) );
	var tt4 = new zz.ui.mdl.Tooltip( );
		tt4.decorate( goog.dom.getElement( 'tt-4' ) );
};
goog.exportSymbol( 'zz.ui.mdl.tooltip', zz.ui.mdl.tooltip );