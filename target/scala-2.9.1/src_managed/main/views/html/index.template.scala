
package views.html

import play.templates._
import play.templates.TemplateMagic._

import play.api.templates._
import play.api.templates.PlayMagic._
import models._
import controllers._
import java.lang._
import java.util._
import scala.collection.JavaConversions._
import scala.collection.JavaConverters._
import play.api.i18n._
import play.api.templates.PlayMagicForJava._
import play.mvc._
import play.data._
import play.api.data.Field
import com.avaje.ebean._
import play.mvc.Http.Context.Implicit._
import views.html._
/**/
object index extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template0[play.api.templates.Html] {

    /**/
    def apply():play.api.templates.Html = {
        _display_ {

Seq[Any](format.raw/*1.1*/("""<!DOCTYPE html>

<html lang="en">
    <head>
        <title>Goal Tracker</title>
        <link rel="stylesheet" media="screen" href="/assets/stylesheets/main.css">
        <link rel="stylesheet" media="screen" href="/assets/stylesheets/lib/bootstrap.css">
        <link rel="stylesheet" media="screen" href="/assets/stylesheets/lib/font-awesome.css">
        <link rel="shortcut icon" type="image/png" href="/assets/images/favicon.png">
        <script src="/assets/javascripts/lib/jquery-1.7.1.min.js" type="text/javascript"></script>
        <script src="/assets/javascripts/lib/require.js" data-main="/assets/javascripts/main.js" type="text/javascript"></script>
        <script src="/assets/javascripts/lib/bootstrap.min.js" type="text/javascript"></script>
        <script src="/assets/javascripts/lib/handlebars-1.0.0.beta.6.js" type="text/javascript"></script>
        <script type="text/javascript">
            require.config("""),format.raw("""{"""),format.raw/*15.29*/("""
                baseUrl: "/assets/javascripts",
                paths: """),format.raw("""{"""),format.raw/*17.25*/("""
                    'text' : 'lib/text',
                    "KO": "lib/knockout-2.1.0"
                """),format.raw("""}"""),format.raw/*20.18*/("""
            """),format.raw("""}"""),format.raw/*21.14*/(""");
        </script>
    </head>
    <body>
        <div id="inner-pages"></div>
    </body>
</html>
"""))}
    }
    
    def render() = apply()
    
    def f:(() => play.api.templates.Html) = () => apply()
    
    def ref = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Sep 04 21:33:55 MDT 2012
                    SOURCE: /Users/justspamjustin/projects/KungFooNinjas/app/views/index.scala.html
                    HASH: d6ba889d9288b40f65abf6f6c2ef6bf0b947ffc8
                    MATRIX: 819->0|1802->936|1922->1009|2075->1115|2136->1129
                    LINES: 30->1|44->15|46->17|49->20|50->21
                    -- GENERATED --
                */
            