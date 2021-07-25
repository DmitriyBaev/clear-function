export default function checkHealth(units) {
  if (units.health > 50) {
    return 'healthy';
  } if (units.health < 15) {
    return 'critical';
  }
  return 'wounded';
}
