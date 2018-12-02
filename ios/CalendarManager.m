//
//  CalendarManager.m
//  iHeartCoffee
//
//  Created by Abdulsemiu Atanda on 02/12/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//
@import UserNotifications;
#import "CalendarManager.h"
#import <React/RCTLog.h>

@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(requestPermission,
                 requestPermissionWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
  UNAuthorizationOptions options = UNAuthorizationOptionAlert + UNAuthorizationOptionSound;
  [center requestAuthorizationWithOptions:options
                        completionHandler:^(BOOL granted, NSError * _Nullable error) {
                          if (granted) {
                            resolve(@"Permission granted");
                          } else {
                            reject(@"Something went wrong", @"permission was not granted", error);
                          }
                        }];
}

RCT_REMAP_METHOD(checkPermission, checkPermissionWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
  [center getNotificationSettingsWithCompletionHandler:^(UNNotificationSettings * _Nonnull settings) {
    if (settings.authorizationStatus != UNAuthorizationStatusAuthorized) {
      resolve(@"permission has not been granted");
    }
  }];
}

RCT_EXPORT_METHOD(addEvent:(NSString *)name details:(NSString *)details)
{
  UNMutableNotificationContent *content = [UNMutableNotificationContent new];
  content.title = name;
  content.body = details;
  content.sound = [UNNotificationSound defaultSound];
    RCTLogInfo(@"Pretending to create an event %@ at %@", name, details);
}


@end
