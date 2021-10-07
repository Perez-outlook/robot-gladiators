///var playerName = 'clank mcKrank';
var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyNames =["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//fight function
var fight = function(enemyName){
  //Alert players that they are starting the round
    while(enemyHealth > 0 && enemyHealth > 0){

     //ask player if they'd like to fight or run
     var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

     //if player picks "skip" confirm and then stop the loop
    
        if (promptFight === "skip" || promprFight === "SKIP"){
            //confimr player wants to skip
            var confirmSkip = window.confirm(" Are you sure you'd like to quit?");
            //if yes (true), leave fight
            if(confirmSkip){
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney",playerMoney);
                break;
            }
        }
            //remove enemy's heatlth by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + ' attacled ' + enemyName + '. ' +enemyName + ' now has ' + enemyHealth + ' health remaining.'
            );
            //check enemy's health
            if (enemyHealth <=  0){
                window.alert(enemyName + ' has died!');
                //award player money for winning
                playerMoney =playerNoney + 20;
                //leave while() loop since enemy is dead
                break;
            }else{
                window.alert(playerName + ' still has ' + playerHealth + ' health left.');
            }
        }
    };
      