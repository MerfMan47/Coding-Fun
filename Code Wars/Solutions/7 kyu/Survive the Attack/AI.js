function hasSurvived(attackPower, defendPower){
    // Calculate the initial attack power for both sides
    let initialAttackPower = attackPower.reduce((a, b) => a + b, 0);
    let initialDefendPower = defendPower.reduce((a, b) => a + b, 0);
  
    // Keep track of the number of survivors on each side
    let attackSurvivors = 0;
    let defendSurvivors = 0;
  
    // Loop through the arrays of attack and defend power
    for (let i = 0; i < attackPower.length; i++) {
      // Check if the attack and defend values are different and non-empty
      if (attackPower[i] !== undefined && defendPower[i] !== undefined) {
        // If the attack value is greater than the defend value, the defender perishes
        // and the attacker survives. If the defend value is greater, the opposite happens.
        // If the values are equal, both perish.
        if (attackPower[i] > defendPower[i]) {
          attackSurvivors++;
        } else if (defendPower[i] > attackPower[i]) {
          defendSurvivors++;
        }
      } else if (attackPower[i] !== undefined) {
        // If the defend value is empty but the attack value is not, the attacker survives.
        attackSurvivors++;
      } else if (defendPower[i] !== undefined) {
        // If the attack value is empty but the defend value is not, the defender survives.
        defendSurvivors++;
      }
    }
  
    // The defending side wins if they have more survivors than the attacking side
    // or if they have the same number of survivors and a higher initial attack power.
    // If the total attack power of both sides is the same, return true.
    return defendSurvivors > attackSurvivors ||
      (defendSurvivors === attackSurvivors && initialDefendPower >= initialAttackPower) ||
      initialDefendPower === initialAttackPower;
    
  }
  