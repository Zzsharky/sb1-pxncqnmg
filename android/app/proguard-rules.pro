# Keep Firebase classes
-keep class com.google.firebase.** { *; }
-keep class com.firebase.** { *; }

# Keep Supabase classes
-keep class io.supabase.** { *; }

# Keep model classes
-keep class com.kaswila.app.models.** { *; }

# General rules
-keepattributes Signature
-keepattributes *Annotation*
-keepattributes SourceFile,LineNumberTable
-keep public class * extends java.lang.Exception

# React Native rules
-keep class com.facebook.react.** { *; }
-keep class com.facebook.hermes.** { *; }

# Keep JavaScript callbacks
-keepclassmembers class * {
    @com.facebook.react.bridge.ReactMethod *;
}