const searchFood = ()=>{
    const searchField = document.getElementById('search-input')
    const searchText =searchField.value 
    searchField.value=''
    if(searchText ==''){

    }
    else{
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
        .then(res=>res.json())
        .then(data =>displayFood(data.meals))
    }
}
const displayFood = meals =>{
    const displayFood =document.getElementById('display-food')
    displayFood.textContent ='';
    meals.forEach(meal => {
    const div =document.createElement('div')
    div.classList.add('col')
    div.innerHTML =` 
     <div onclick ="foodDetails(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
     <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
     </div>
     </div>
     `
     displayFood.appendChild(div);
    });
}
const foodDetails = mealId =>{
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res =>res.json())
    .then(data =>foodDetail(data.meals[0]))
}

const foodDetail =meal =>{
    const mealDetails =document.getElementById('food-details')
    mealDetails.textContent ='';
    const div =document.createElement('div')
    div.classList.add('card')
    div.innerHTML=`
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `
    mealDetails.appendChild(div)
}
