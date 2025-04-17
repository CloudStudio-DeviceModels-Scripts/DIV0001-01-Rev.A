function getConfiguration(config)
{
  // Esta función permite indicar valores de configuración generales para 
  // todos los dispositivos de este modelo.
  
  // Dependiendo del significado de la "dirección del dispositivo" en este 
  // dispositivo, es posible que desee cambiar la etiqueta que se utiliza 
  // para hacer referencia a la dirección en la interfaz de usuario.
  // Por ejemplo, si la dirección del dispositivo es en realidad una dirección 
  // MAC, es posible que desee utilizar el código siguiente.
  
  // config.addressLabel = {en: "MAC address", es: "Dirección MAC"};
}


function getEndpoints(deviceAddress, endpoints)
{
  var d1 = endpoints.addEndpoint("1", "Día 1", endpointType.genericSensor);
  d1.variableTypeId = 1400;
  var d2 = endpoints.addEndpoint("2", "Día 2", endpointType.genericSensor);
  d2.variableTypeId = 1400;
  var d3 = endpoints.addEndpoint("3", "Día 3", endpointType.genericSensor);
  d3.variableTypeId = 1400;
  var d4 = endpoints.addEndpoint("4", "Día 4", endpointType.genericSensor);
  d4.variableTypeId = 1400;
  var d5 = endpoints.addEndpoint("5", "Día 5", endpointType.genericSensor);
  d5.variableTypeId = 1400;
  var d6 = endpoints.addEndpoint("6", "Día 6", endpointType.genericSensor);
  d6.variableTypeId = 1400;
  var d7 = endpoints.addEndpoint("7", "Día 7", endpointType.genericSensor);
  d7.variableTypeId = 1400;
  var d8 = endpoints.addEndpoint("8", "Día 8", endpointType.genericSensor);
  d8.variableTypeId = 1400;
  var d9 = endpoints.addEndpoint("9", "Día 9", endpointType.genericSensor);
  d9.variableTypeId = 1400;
  var d10 = endpoints.addEndpoint("10", "Día 10", endpointType.genericSensor);
  d10.variableTypeId = 1400;
  var d11 = endpoints.addEndpoint("11", "Día 11", endpointType.genericSensor);
  d11.variableTypeId = 1400;
  var d12 = endpoints.addEndpoint("12", "Día 12", endpointType.genericSensor);
  d12.variableTypeId = 1400;
  var d13 = endpoints.addEndpoint("13", "Día 13", endpointType.genericSensor);
  d13.variableTypeId = 1400;
  var d14 = endpoints.addEndpoint("14", "Día 14", endpointType.genericSensor);
  d14.variableTypeId = 1400;
  var d15 = endpoints.addEndpoint("15", "Día 15", endpointType.genericSensor);
  d15.variableTypeId = 1400;
  var d16 = endpoints.addEndpoint("16", "Día 16", endpointType.genericSensor);
  d16.variableTypeId = 1400;
  var d17 = endpoints.addEndpoint("17", "Día 17", endpointType.genericSensor);
  d17.variableTypeId = 1400;
  var d18 = endpoints.addEndpoint("18", "Día 18", endpointType.genericSensor);
  d18.variableTypeId = 1400;
  var d19 = endpoints.addEndpoint("19", "Día 19", endpointType.genericSensor);
  d19.variableTypeId = 1400;
  var d20 = endpoints.addEndpoint("20", "Día 20", endpointType.genericSensor);
  d20.variableTypeId = 1400;
  var d21 = endpoints.addEndpoint("21", "Día 21", endpointType.genericSensor);
  d21.variableTypeId = 1400;
  var d22 = endpoints.addEndpoint("22", "Día 22", endpointType.genericSensor);
  d22.variableTypeId = 1400;
  var d23 = endpoints.addEndpoint("23", "Día 23", endpointType.genericSensor);
  d23.variableTypeId = 1400;
  var d24 = endpoints.addEndpoint("24", "Día 24", endpointType.genericSensor);
  d24.variableTypeId = 1400;
  var d25 = endpoints.addEndpoint("25", "Día 25", endpointType.genericSensor);
  d25.variableTypeId = 1400;
  var d26 = endpoints.addEndpoint("26", "Día 26", endpointType.genericSensor);
  d26.variableTypeId = 1400;
  var d27 = endpoints.addEndpoint("27", "Día 27", endpointType.genericSensor);
  d27.variableTypeId = 1400;
  var d28 = endpoints.addEndpoint("28", "Día 28", endpointType.genericSensor);
  d28.variableTypeId = 1400;
  var d29 = endpoints.addEndpoint("29", "Día 29", endpointType.genericSensor);
  d29.variableTypeId = 1400;
  var d30 = endpoints.addEndpoint("30", "Día 30", endpointType.genericSensor);
  d30.variableTypeId = 1400;
  var d31 = endpoints.addEndpoint("31", "Día 31", endpointType.genericSensor);
  d31.variableTypeId = 1400;
  // CONSUMO CONTADOR GRANDE
  var n1 = endpoints.addEndpoint("32", "Volumen de Agua 1", endpointType.genericSensor);
  n1.variableTypeId = 1398;
  var n2 = endpoints.addEndpoint("33", "Volumen de Agua 2", endpointType.genericSensor);
  n2.variableTypeId = 1398;
  var n3 = endpoints.addEndpoint("34", "Volumen de Agua 3", endpointType.genericSensor);
  n3.variableTypeId = 1398;
  var n4 = endpoints.addEndpoint("35", "Volumen de Agua 4", endpointType.genericSensor);
  n4.variableTypeId = 1398;
  var n5 = endpoints.addEndpoint("36", "Volumen de Agua 5", endpointType.genericSensor);
  n5.variableTypeId = 1398;
  var n6 = endpoints.addEndpoint("37", "Volumen de Agua 6", endpointType.genericSensor);
  n6.variableTypeId = 1398;
  var n7 = endpoints.addEndpoint("38", "Volumen de Agua 7", endpointType.genericSensor);
  n7.variableTypeId = 1398;
  var n8 = endpoints.addEndpoint("39", "Volumen de Agua 8", endpointType.genericSensor);
  n8.variableTypeId = 1398;
  var n9 = endpoints.addEndpoint("40", "Volumen de Agua 9", endpointType.genericSensor);
  n9.variableTypeId = 1398;
  var n10 = endpoints.addEndpoint("41", "Volumen de Agua 10", endpointType.genericSensor);
  n10.variableTypeId = 1398;
  var n11 = endpoints.addEndpoint("42", "Volumen de Agua 11", endpointType.genericSensor);
  n11.variableTypeId = 1398;
  var n12 = endpoints.addEndpoint("43", "Volumen de Agua 12", endpointType.genericSensor);
  n12.variableTypeId = 1398;
  var n13 = endpoints.addEndpoint("44", "Volumen de Agua 13", endpointType.genericSensor);
  n13.variableTypeId = 1398;
  var n14 = endpoints.addEndpoint("45", "Volumen de Agua 14", endpointType.genericSensor);
  n14.variableTypeId = 1398;
  var n15 = endpoints.addEndpoint("46", "Volumen de Agua 15", endpointType.genericSensor);
  n15.variableTypeId = 1398;
  var n16 = endpoints.addEndpoint("47", "Volumen de Agua 16", endpointType.genericSensor);
  n16.variableTypeId = 1398;
  var n17 = endpoints.addEndpoint("48", "Volumen de Agua 17", endpointType.genericSensor);
  n17.variableTypeId = 1398;
  var n18 = endpoints.addEndpoint("49", "Volumen de Agua 18", endpointType.genericSensor);
  n18.variableTypeId = 1398;
  var n19 = endpoints.addEndpoint("50", "Volumen de Agua 19", endpointType.genericSensor);
  n19.variableTypeId = 1398;
  var n20 = endpoints.addEndpoint("51", "Volumen de Agua 20", endpointType.genericSensor);
  n20.variableTypeId = 1398;
  var n21 = endpoints.addEndpoint("52", "Volumen de Agua 21", endpointType.genericSensor);
  n21.variableTypeId = 1398;
  var n22 = endpoints.addEndpoint("53", "Volumen de Agua 22", endpointType.genericSensor);
  n22.variableTypeId = 1398;
  var n23 = endpoints.addEndpoint("54", "Volumen de Agua 23", endpointType.genericSensor);
  n23.variableTypeId = 1398;
  var n24 = endpoints.addEndpoint("55", "Volumen de Agua 24", endpointType.genericSensor);
  n24.variableTypeId = 1398;
  var n25 = endpoints.addEndpoint("56", "Volumen de Agua 25", endpointType.genericSensor);
  n25.variableTypeId = 1398;
  var n26 = endpoints.addEndpoint("57", "Volumen de Agua 26", endpointType.genericSensor);
  n26.variableTypeId = 1398;
  var n27 = endpoints.addEndpoint("58", "Volumen de Agua 27", endpointType.genericSensor);
  n27.variableTypeId = 1398;
  var n28 = endpoints.addEndpoint("59", "Volumen de Agua 28", endpointType.genericSensor);
  n28.variableTypeId = 1398;
  var n29 = endpoints.addEndpoint("60", "Volumen de Agua 29", endpointType.genericSensor);
  n29.variableTypeId = 1398;
  var n30 = endpoints.addEndpoint("61", "Volumen de Agua 30", endpointType.genericSensor);
  n30.variableTypeId = 1398;
  var n31 = endpoints.addEndpoint("62", "Volumen de Agua 31", endpointType.genericSensor);
  n31.variableTypeId = 1398;

  // CONSUMO CONTADOR PEQUEÑO
  var np1 = endpoints.addEndpoint("63", "Volumen de Agua pequeño 1", endpointType.genericSensor);
  np1.variableTypeId = 1399;
  var np2 = endpoints.addEndpoint("64", "Volumen de Agua pequeño 2", endpointType.genericSensor);
  np2.variableTypeId = 1399;
  var np3 = endpoints.addEndpoint("65", "Volumen de Agua pequeño 3", endpointType.genericSensor);
  np3.variableTypeId = 1399;
  var np4 = endpoints.addEndpoint("66", "Volumen de Agua pequeño 4", endpointType.genericSensor);
  np4.variableTypeId = 1399;
  var np5 = endpoints.addEndpoint("67", "Volumen de Agua pequeño 5", endpointType.genericSensor);
  np5.variableTypeId = 1399;
  var np6 = endpoints.addEndpoint("68", "Volumen de Agua pequeño 6", endpointType.genericSensor);
  np6.variableTypeId = 1399;
  var np7 = endpoints.addEndpoint("69", "Volumen de Agua pequeño 7", endpointType.genericSensor);
  np7.variableTypeId = 1399;
  var np8 = endpoints.addEndpoint("70", "Volumen de Agua pequeño 8", endpointType.genericSensor);
  np8.variableTypeId = 1399;
  var np9 = endpoints.addEndpoint("71", "Volumen de Agua pequeño 9", endpointType.genericSensor);
  np9.variableTypeId = 1399;
  var np10 = endpoints.addEndpoint("72", "Volumen de Agua pequeño 10", endpointType.genericSensor);
  np10.variableTypeId = 1399;
  var np11 = endpoints.addEndpoint("73", "Volumen de Agua pequeño 11", endpointType.genericSensor);
  np11.variableTypeId = 1399;
  var np12 = endpoints.addEndpoint("74", "Volumen de Agua pequeño 12", endpointType.genericSensor);
  np12.variableTypeId = 1399;
  var np13 = endpoints.addEndpoint("75", "Volumen de Agua pequeño 13", endpointType.genericSensor);
  np13.variableTypeId = 1399;
  var np14 = endpoints.addEndpoint("76", "Volumen de Agua pequeño 14", endpointType.genericSensor);
  np14.variableTypeId = 1399;
  var np15 = endpoints.addEndpoint("77", "Volumen de Agua pequeño 15", endpointType.genericSensor);
  np15.variableTypeId = 1399;
  var np16 = endpoints.addEndpoint("78", "Volumen de Agua pequeño 16", endpointType.genericSensor);
  np16.variableTypeId = 1399;
  var np17 = endpoints.addEndpoint("79", "Volumen de Agua pequeño 17", endpointType.genericSensor);
  np17.variableTypeId = 1399;
  var np18 = endpoints.addEndpoint("80", "Volumen de Agua pequeño 18", endpointType.genericSensor);
  np18.variableTypeId = 1399;
  var np19 = endpoints.addEndpoint("81", "Volumen de Agua pequeño 19", endpointType.genericSensor);
  np19.variableTypeId = 1399;
  var np20 = endpoints.addEndpoint("82", "Volumen de Agua pequeño 20", endpointType.genericSensor);
  np20.variableTypeId = 1399;
  var np21 = endpoints.addEndpoint("83", "Volumen de Agua pequeño 21", endpointType.genericSensor);
  np21.variableTypeId = 1399;
  var np22 = endpoints.addEndpoint("84", "Volumen de Agua pequeño 22", endpointType.genericSensor);
  np22.variableTypeId = 1399;
  var np23 = endpoints.addEndpoint("85", "Volumen de Agua pequeño 23", endpointType.genericSensor);
  np23.variableTypeId = 1399;
  var np24 = endpoints.addEndpoint("86", "Volumen de Agua pequeño 24", endpointType.genericSensor);
  np24.variableTypeId = 1399;
  var np25 = endpoints.addEndpoint("87", "Volumen de Agua pequeño 25", endpointType.genericSensor);
  np25.variableTypeId = 1399;
  var np26 = endpoints.addEndpoint("88", "Volumen de Agua pequeño 26", endpointType.genericSensor);
  np26.variableTypeId = 1399;
  var np27 = endpoints.addEndpoint("89", "Volumen de Agua pequeño 27", endpointType.genericSensor);
  np27.variableTypeId = 1399;
  var np28 = endpoints.addEndpoint("90", "Volumen de Agua pequeño 28", endpointType.genericSensor);
  np28.variableTypeId = 1399;
  var np29 = endpoints.addEndpoint("91", "Volumen de Agua pequeño 29", endpointType.genericSensor);
  np29.variableTypeId = 1399;
  var np30 = endpoints.addEndpoint("92", "Volumen de Agua pequeño 30", endpointType.genericSensor);
  np30.variableTypeId = 1399;
  var np31 = endpoints.addEndpoint("93", "Volumen de Agua pequeño 31", endpointType.genericSensor);
  np31.variableTypeId = 1399;

}

function validateDeviceAddress(address, result)
{
  // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
  // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
  // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
  // caso de que el formato de la dirección sea incorrecto.
  
  // En el código siguiente, se realiza una validación para asegurarse de que la 
  // dirección tiene exactamente 10 caracteres.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
  // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
  // de endpoints manualmente al dispositivo después de que se creó.

  // En el código siguiente, el agregado manual de endpoints está deshabilitada 
  // en la interfaz de usuario. Esto significa que el dispositivo se limitará a los 
  // endpoints definidos por la función getEndpoints() anterior.
  
  // rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario para cada
  // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
  // eliminación de endpoints, o la edición de subtipo de endpoint.

  // En el código siguiente, se definen las siguientes reglas:
  // - Los endpoints no se pueden eliminar.
  // - El subtipo de endpoint se puede cambiar, pero solo para el segundo endpoint.
  
  // rules.canDelete = false;
  // rules.canEditSubType = (endpoint.address == "2");
}
