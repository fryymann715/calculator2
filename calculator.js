( function() {

  Calculator = function( domElement ) {
    this.dom = domElement
    this.postfix = ''
    this.rpnString = ''
    this.postEquals = ''
    this.numberStack = []
    this.display = ''
    this.newNumber = true
    this.prevOperator = null
    this.prevNumber = null
    this.inputHandler = this.inputHandler.bind( this )
    this.addListener()
  }

  Calculator.operators = {
    '+': 2,
    '-': 2,
    '*': 3,
    '/': 3
   }

  Calculator.isOperator = function( char ) {
    return Object.keys(Calculator.operators).includes( char )
  }

  Calculator.isEquals = function( char ) {
    return char === '='
  }

  Calculator.postfixHasOperator = function( input ) {
    var operators = Object.keys( Calculator.operators )
    var postfixString = input.toString()
    var hasOperator = false
    for ( var x=0; x<Calculator.operators.length; x++ ) {
      if ( postfixString.indexOf( Calculator.operators[x] ) != -1 ) {
        hasOperator = true
      }
    }
    return hasOperator
  }
  Calculator.parseNumbers = function( string ) {
    if ( string === '0' ) {
      return '0'
    } else {
      return parseFloat( string )
    }
  }

  Calculator.perform = {
    add: function( num1, num2 ) {
      return parseFloat( num1 ) + parseFloat( num2 )
    },
    subtract: function( num1, num2 ) {
      return parseFloat( num1 ) - parseFloat( num2 )
    },
    multiply: function( num1, num2 ) {
      return parseFloat( num1 ) * parseFloat( num2 )
    },
    divide: function( num1, num2 ){
      return parseFloat( num1 ) / parseFloat( num2 )
    }
  }



  Calculator.prototype = {

    addListener: function() {
      var buttons = this.dom.querySelector( '.calculator-interface' )
      buttons.addEventListener( 'click', this.inputHandler )
    },

    inputHandler: function( event ) {
      var input = event.target.dataset.value
      if ( Calculator.isOperator( input ) && this.prevOperator ) {
          if ( Calculator.operators[input] <= Calculator.operators[this.prevOperator] ) {
            this.handleLowerOperator( input )
          } else {
            this.handleHigherOperator( input )
          }
      } else if ( Calculator.isOperator( input ) && !(this.prevOperator) ) {
        this.handleLowerOperator( input )
      }

      else if ( Calculator.isEquals( input ) ) {
        if ( this.postEquals.length > 0 ) {
          this.convertToRPN( this.postEquals )
          this.evalRPN()
          this.display = this.numberStack.pop()
          this.setDisplay()
          this.postEquals = this.display + this.prevOperator + this.prevNumber
        } else {
          this.prevNumber = this.display
          this.postfix += this.display
          this.convertToRPN( this.postfix )
          this.evalRPN()
          this.display = this.numberStack.pop()
          this.setDisplay()
          this.postEquals = this.display + this.prevOperator + this.prevNumber
        }
        this.newNumber = true
        this.postfix = ''

      } else if ( input === 'clear' ) {
        this.postfix = ''
        this.rpnString = ''
        this.postEquals = ''
        this.numberStack = []
        this.display = 0
        this.setDisplay()
        this.newNumber = true
        this.prevOperator = null
        this.prevNumber = null
      }

      else {
        if ( this.newNumber ) {
          this.display = input
          this.setDisplay()
          this.newNumber= false
        } else {
          this.display += input
          this.setDisplay()
        }
      }
    },

    convertToRPN: function( equationString ) {
      var output = ''
      var operators = []
      var tokens = equationString.split('')


      for ( x=0; x<tokens.length; x++ ) {
        var token = tokens[x]
        if ( ( parseFloat( token ) || token === '0') || token ==='.' ) {
          output += token
          continue;
        } else if( token === '|' ) {
          output+= '-'
          continue;
        } else {
          output += ' '
        }
        while (
          operators.length > 0
          && Calculator.operators[token] <= Calculator.operators[ operators[ operators.length-1 ] ]
        ) {
          output += operators.pop()
          output += ' '
        }
        operators.push( token )
      }
      while( operators.length > 0 ) {
        output += ' '
        output += operators.pop()
      }
      this.rpnString = output
    },

    evalRPN: function() {
      var rpnString = this.rpnString
      var tokens = rpnString.split(' ')
      for ( var x=0; x<tokens.length; x++ ) {
        var token = tokens[x]
        if ( parseFloat( token ) || token === '0' ) {
          this.numberStack.push( token )
        } else {
          var num2 = Calculator.parseNumbers( this.numberStack.pop() )
          var num1 = Calculator.parseNumbers( this.numberStack.pop() )

          var result
          switch( token ) {
            case '*':
              result = Calculator.perform.multiply( num1, num2 )
              break;
            case '/':
              result = Calculator.perform.divide( num1, num2 )
              break;
            case '+':
              result = Calculator.perform.add( num1, num2 )
              break;
            case '-':
              result = Calculator.perform.subtract( num1, num2 )
              break;
          }
          this.numberStack.push( result )
        }
      }
    },

    handleLowerOperator: function( input ) {
      this.prevOperator = input
      this.prevNumber = this.display

      if ( !Calculator.postfixHasOperator( this.postfix ) ) {
        this.postfix = this.display + this.prevOperator
      } else {
        this.postfix += this.display
        this.convertToRPN( this.postfix )
        this.evalRPN()
        this.display = this.numberStack.pop()
        this.setDisplay()
        this.postfix = this.display + this.prevOperator
        this.rpnString = ''
      }
      this.newNumber = true
      this.postEquals = ''
    },

    handleHigherOperator: function( input ) {
      this.prevNumber = this.display
      this.prevOperator = input
      this.postfix += this.display + this.prevOperator
      this.newNumber = true
    },

    setDisplay: function() {
      this.dom.querySelector( '.calculator-display' )
        .innerHTML = this.display
    },

    clickHandler: function( event ) {
      this.inputHandler( event.target.dataset.value )
    },

    keyHandler: function( event ) {
    },

  }

  document.querySelectorAll( '.calculator' ).forEach( function( calculator ) {
    var calc = new Calculator( calculator )
  })

})()
