const args = process.argv.slice(2);
const coords = args[0];
function dmsToDecimal(degrees, minutes, seconds, direction) {
    let decimal = degrees + minutes / 60 + seconds / 3600;

    // Adjust for direction
    if (direction === 'S' || direction === 'W') {
        decimal = -decimal;
    }

    return decimal;
}

// Example usage:
// Convert DMS latitude 49° 30' 0" N and longitude 123° 30' 0" W to decimal
const latitudeDMS = { degrees: 49, minutes: 30, seconds: 0, direction: 'N' };
const longitudeDMS = { degrees: 123, minutes: 30, seconds: 0, direction: 'W' };

const decimalLatitude = dmsToDecimal(latitudeDMS.degrees, latitudeDMS.minutes, latitudeDMS.seconds, latitudeDMS.direction);
const decimalLongitude = dmsToDecimal(longitudeDMS.degrees, longitudeDMS.minutes, longitudeDMS.seconds, longitudeDMS.direction);

console.log(`Decimal Latitude: ${decimalLatitude}, Decimal Longitude: ${decimalLongitude}`);


// 6 deg 14' 43.46\" N, 75 deg 35' 21.05\" W