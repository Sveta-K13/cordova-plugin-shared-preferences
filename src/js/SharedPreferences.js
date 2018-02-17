const PLUGIN = 'SharedPreferences'

export function getSharedPreferences(file, mode, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, PLUGIN, 'getSharedPreferences', [file, mode])
}

export function putString(key, string, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, PLUGIN, 'putString', [key, string])
}

export function getString(key, defaultVal, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, PLUGIN, 'getString', [key, defaultVal])
}

export function putBoolean(key, string, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, PLUGIN, 'putBoolean', [key, string])
}

export function getBoolean(key, defaultVal, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, PLUGIN, 'getBoolean', [key, defaultVal])
}

export function remove(key, successCallback, errorCallback){
  cordova.exec(successCallback, errorCallback, PLUGIN, 'remove', [key])
}

export function clear(successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, PLUGIN, 'clear', ['null'])
}
