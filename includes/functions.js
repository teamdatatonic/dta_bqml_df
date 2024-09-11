// models.js

/**
 * Returns the reference to the best-performing model.
 * The function queries a table that contains the best model's `model_type`.
 * @returns {string} The reference to the best-performing model.
 */
function getBestModelReference(model_type) {

  switch (model_type) {
    case 'DNN':
      return ref('dnn_reg');        
    case 'LINEAR_REG':
      return ref('linear_reg');     
    case 'XGBOOST':
      return ref('xgboost'); 
  }
}

module.exports = { getBestModelReference };
