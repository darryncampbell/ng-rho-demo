*Please be aware that this application / sample is provided as-is for demonstration purposes without any guarantee of support*
=========================================================

# ng-rho-demo
Angular Demo with Rho

## Overview

This RhoElements application makes use of Angular and is largely based on the official Angular Tutorial: 

##Pre-Requisites

- NodeJS & NPM
- Bower (npm install -g bower)
- RhoElements 5.1

## Instructions

+ Clone this git repository
+ Install bower dependencies
```
(From /Public folder)
>bower install
```
+ Build Rho application
```
>rake device:android:production
```
+ Run on Zebra Device
```
>adb install -r (created APK)
```

##  Usage

+ Observe use of 2 way data binding, use of templating & routes.
+ Observe scanning in the Controller of the detail view which adds scanned barcodes to a list after passing them through a filter

##  Running on a Desktop

+ Navigae to /Public
```
>npm start
```
+ **NOTE:**: Delete the created node_modules folder prior to building the APK, otherwise there will be too many files to include in the APK

## Related blog posts

+ Angular & Rho: https://developer.motorolasolutions.com/community/rhomobile-suite/rhomobile-community/rhomobile-blogs/blog/2015/08/03/do-it-with-directives
+ Ionic & Rho: https://developer.motorolasolutions.com/docs/DOC-3444
