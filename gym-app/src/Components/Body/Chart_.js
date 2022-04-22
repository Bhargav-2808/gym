import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Chart from "react-google-charts";

const Chart_ = ({ data_ }) => {
  console.log(data_);
  const { height, weight, task } = data_;

  const weight_ = parseInt(weight);
  const height_ = parseInt(height);
  console.log(task);
  let bmi = (weight_ / ((height_ * height_) / 10000)).toFixed(2);

  const data = [
    ["Index", "Number", { role: "style" }],
    ["Weight(Kg)", weight_, "#1b4a84"], // RGB value
    ["Height(cm)", height_, "#1b4a84"], // English color name
    ["BMI", bmi, "#1b4a84"],
    // CSS-style declaration
  ];

  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col className="d-flex justify-content-center">
            <h1>
              Your BMI is <span style={{ color: "#1b4a84" }}> {bmi}</span>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Chart chartType="ColumnChart" data={data} height={"400px"} />
          </Col>
        </Row>
      </Container>

      <Container className="meal" style={{ width: "70%" }}>
        <Row>
          <Col className="ms-4">
            {task == "Weight gain" ? (
              <>
                <h4 className="mt-4 meal-header">Day One</h4>
                <hr className="mt-3 mb-3" />
                <p>
                  <strong>Meal 1</strong>
                </p>
                <ul>
                  <li>1/2 cup oatmeal (dry amount) made with water</li>
                  <li>1/2 cup strawberries</li>
                  <li>6 egg whites cooked with 1 yolk</li>
                </ul>
                <p>
                  <strong>Meal 2</strong>
                </p>
                <ul>
                  <li>1 cup green vegetables</li>
                  <li>8 oz. chicken breast</li>
                </ul>
                <p>
                  <strong>Meal 3</strong>
                </p>
                <ul>
                  <li>
                    Tuna sandwich made with 6-oz. can tuna (in spring water), 2
                    slices whole-wheat bread, 1 Tbsp. fat-free mayo, 2 leaves
                    romaine lettuce
                  </li>
                </ul>
                <p>
                  <strong>Meal 4</strong>
                </p>
                <ul>
                  <li>Protein shake made w/ 40 g whey protein</li>
                </ul>
                <p>
                  <strong>Meal 5</strong>
                </p>
                <ul>
                  <li>
                    Chicken salad made with 8 oz. chicken breast, 2 Tbsp.
                    Italian dressing, 1/2 medium tomato, 2 leaves romaine
                    lettuce, 1/2 cup broccoli
                  </li>
                </ul>
                <p>
                  1,817 calories, 255 g protein, 98 g carbohydrate, 37 g fat, 20
                  g fiber
                </p>
                <h4 className="mt-4 meal-header">Day Two</h4>
                <hr className="mt-3 mb-3" />
                <p>
                  <strong>Meal 1</strong>
                </p>
                <ul>
                  <li>1 medium bagel with 2 tbsp. reduced-fat peanut butter</li>
                  <li>6 egg whites cooked with 1 yolk</li>
                </ul>
                <p>
                  <strong>Meal 2</strong>
                </p>
                <ul>
                  <li>1 cup brown long-grain rice (cooked amount)</li>
                  <li>1 cup green veggies</li>
                  <li>6 oz. chicken breast</li>
                </ul>
                <p>
                  <strong>Meal 3</strong>
                </p>
                <ul>
                  <li>1 cup green veggies</li>
                  <li>6 oz. lean steak</li>
                </ul>
                <p>
                  <strong>Meal 4</strong>
                </p>
                <ul>
                  <li>Protein shake made w/ 30-40 g whey protein</li>
                </ul>
                <p>
                  <strong>Meal 5</strong>
                </p>
                <ul>
                  <li>8 oz. red snapper or halibut</li>
                  <li>1 cup broccoli</li>
                </ul>
                <p>
                  1,959 calories, 254 g protein, 132 g carbohydrate, 39 g fat,
                  17 g fiber
                </p>
                <h4 className="mt-4 meal-header">Day Three</h4>
                <hr className="mt-3 mb-3" />
                <p>
                  <strong>Meal 1</strong>
                </p>
                <ul>
                  <li>1/2 cup oatmeal made with water</li>
                  <li>6 egg whites cooked with 1 yolk</li>
                  <li>1 piece fruit</li>
                </ul>
                <p>
                  <strong>Meal 2</strong>
                </p>
                <ul>
                  <li>1 cup green veggies</li>
                  <li>8 oz. chicken breast</li>
                </ul>
                <p>
                  <strong>Meal 3</strong>
                </p>
                <ul>
                  <li>1 cup green veggies</li>
                  <li>6 oz. lean steak</li>
                  <li>Large baked potato with skin (3-4″ in diameter)</li>
                </ul>
                <p>
                  <strong>Meal 4</strong>
                </p>
                <ul>
                  <li>Low-carb, low-sugar protein bar</li>
                </ul>
                <p>
                  <strong>Meal 5 </strong>
                </p>
                <ul>
                  <li>
                    Omelet made with 8 egg whites and 1 yolk, cooked with 1/2
                    cup broccoli, 2 mushrooms, fresh salsa
                  </li>
                </ul>
                <p>
                  1,862 calories, 226 g protein, 149 g carbohydrate, 35 g fat,
                  23 g fiber
                </p>
                <h4 className="mt-4 meal-header">Day Four</h4>
                <hr className="mt-3 mb-3" />
                <p>
                  <strong>Meal 1</strong>
                </p>
                <ul>
                  <li>1 cup whole-grain cereal</li>
                  <li>1 cup 1% milk</li>
                  <li>1 piece fruit</li>
                  <li>1 Tbsp. peanut butter</li>
                </ul>
                <p>
                  <strong>Meal 2</strong>
                </p>
                <ul>
                  <li>Large baked potato with skin (3-4″ in diameter)</li>
                  <li>1 cup green veggies</li>
                  <li>6 oz. chicken breast</li>
                </ul>
                <p>
                  <strong>Meal 3</strong>
                </p>
                <ul>
                  <li>Large baked potato with skin (3-4″ in diameter)</li>
                  <li>1 cup green veggies</li>
                  <li>6 oz. lean steak</li>
                </ul>
                <p>
                  <strong>Meal 4</strong>
                </p>
                <ul>
                  <li>Protein shake made w/ 30-40 g whey protein</li>
                </ul>
                <p>
                  <strong>Meal 5 </strong>
                </p>
                <ul>
                  <li>
                    16-oz. can tuna (in spring water) made with 1 Tbsp. fat-free
                    mayo
                  </li>
                  <li>6-8 stalks asparagus</li>
                </ul>
                <p>
                  1,984 calories, 226 g protein, 200 g carbohydrate, 29 g fat,
                  28 g fiber
                </p>
                <h4 className="mt-4 meal-header">Day Five</h4>
                <hr className="mt-3 mb-3" />
                <p>
                  <strong>Meal 1</strong>
                </p>
                <ul>
                  <li>1/2 cup oatmeal made with water</li>
                  <li>7 egg whites cooked with 1 yolk</li>
                  <li>1/2 cup strawberries</li>
                </ul>
                <p>
                  <strong>Meal 2</strong>
                </p>
                <ul>
                  <li>1 cup green veggies</li>
                  <li>8 oz. chicken breast</li>
                </ul>
                <p>
                  <strong>Meal 3</strong>
                </p>
                <ul>
                  <li>Large baked potato with skin (3-4″ in diameter)</li>
                  <li>1 cup green veggies</li>
                  <li>8 oz. sliced turkey</li>
                </ul>
                <p>
                  <strong>Meal 4</strong>
                </p>
                <ul>
                  <li>
                    Protein shake made w/ 30-40 g whey protein and 1 cup berries
                  </li>
                </ul>
                <p>
                  <strong>Meal 5</strong>
                </p>
                <ul>
                  <li>7 oz. lean steak</li>
                  <li>6-8 stalks asparagus</li>
                </ul>
                <p>
                  1,846 calories, 258 g protein, 122 g carbohydrate, 32 g fat,
                  23 g fiber
                </p>
                <h4 className="mt-4 meal-header">Day Six</h4>
                <hr className="mt-3 mb-3" />
                <p>
                  <strong>Meal 1</strong>
                </p>
                <ul>
                  <li>1/2 cup oatmeal (dry amount) made with water</li>
                  <li>1/2 cup strawberries</li>
                  <li>6 egg whites cooked with 1 yolk</li>
                </ul>
                <p>
                  <strong>Meal 2</strong>
                </p>
                <ul>
                  <li>1 cup green vegetables</li>
                  <li>8 oz. chicken breast</li>
                </ul>
                <p>
                  <strong>Meal 3</strong>
                </p>
                <ul>
                  <li>
                    Tuna sandwich made with 6-oz. can tuna (in spring water), 2
                    slices whole-wheat bread, 1 Tbsp. fat-free mayo, 2 leaves
                    romaine lettuce
                  </li>
                </ul>
                <p>
                  <strong>Meal 4</strong>
                </p>
                <ul>
                  <li>Protein shake made w/ 40 g whey protein</li>
                </ul>
                <p>
                  <strong>Meal 5</strong>
                </p>
                <ul>
                  <li>
                    Chicken salad made with 8 oz. chicken breast, 2 Tbsp.
                    Italian dressing, 1/2 medium tomato, 2 leaves romaine
                    lettuce, 1/2 cup broccoli
                  </li>
                </ul>
                <p>
                  1,817 calories, 255 g protein, 98 g carbohydrate, 37 g fat, 20
                  g fiber
                </p>
                <h4 className="mt-4 meal-header">Day Seven</h4>
                <hr className="mt-3 mb-3" />
                <p>
                  <strong>Meal 1</strong>
                </p>
                <ul>
                  <li>1 medium bagel with 2 tbsp. reduced-fat peanut butter</li>
                  <li>6 egg whites cooked with 1 yolk</li>
                </ul>
                <p>
                  <strong>Meal 2</strong>
                </p>
                <ul>
                  <li>1 cup brown long-grain rice (cooked amount)</li>
                  <li>1 cup green veggies</li>
                  <li>6 oz. chicken breast</li>
                </ul>
                <p>
                  <strong>Meal 3</strong>
                </p>
                <ul>
                  <li>1 cup green veggies</li>
                  <li>6 oz. lean steak</li>
                </ul>
                <p>
                  <strong>Meal 4</strong>
                </p>
                <ul>
                  <li>Protein shake made w/ 30-40 g whey protein</li>
                </ul>
                <p>
                  <strong>Meal 5</strong>
                </p>
                <ul>
                  <li>8 oz. red snapper or halibut</li>
                  <li>1 cup broccoli</li>
                </ul>
                <p>
                  1,959 calories, 254 g protein, 132 g carbohydrate, 39 g fat,
                  17 g fiber
                </p>
              </>
            ) : (
              <>
                <h4 className="mt-4 meal-header">Day One</h4>
                <hr className="mt-3 mb-3" />
                <p>
                  <strong>Breakfast</strong>
                </p>
                <ul>
                  <li>Sambar with brown rice idli</li>
                </ul>
                <p>
                  <strong>Lunch</strong>
                </p>
                <ul>
                  <li>Whole-grain roti with mixed-vegetable curry</li>
                </ul>
                <p>
                  <strong>Dinner</strong>
                </p>
                <ul>
                  <li>
                    Tofu curry with mixed vegetables and a fresh spinach salad
                  </li>
                </ul>

                
                <h4 className="mt-4 meal-header">Day Two</h4>
                <hr className="mt-3 mb-3" />
                <p>
                  <strong>Breakfast</strong>
                </p>
                <ul>
                  <li>Chana dal pancakes with mixed vegetables and a glass of milk</li>
                </ul>
                <p>
                  <strong>Lunch</strong>
                </p>
                <ul>
                  <li>Chickpea curry with brown rice</li>
                </ul>
                <p>
                  <strong>Dinner</strong>
                </p>
                <ul>
                  <li>
                  Khichdi with sprout salad
                  </li>
                </ul>
                
                <h4 className="mt-4 meal-header">Day Three</h4>
                <hr className="mt-3 mb-3" />
                <p>
                  <strong>Breakfast</strong>
                </p>
                <ul>
                  <li>Apple cinnamon porridge made with milk and topped with sliced almonds</li>
                </ul>
                <p>
                  <strong>Lunch</strong>
                </p>
                <ul>
                  <li> Whole-grain roti with tofu and mixed vegetables</li>
                </ul>
                <p>
                  <strong>Dinner</strong>
                </p>
                <ul>
                  <li>
                  Palak paneer with brown rice and vegetables
                  </li>
                </ul>
               
                <h4 className="mt-4 meal-header">Day Four</h4>
                <hr className="mt-3 mb-3" />
                <p>
                  <strong>Breakfast</strong>
                </p>
                <ul>
                  <li>Vegetable dalia and a glass of milk</li>
                </ul>
                <p>
                  <strong>Lunch</strong>
                </p>
                <ul>
                  <li>Vegetable sambar with brown rice</li>
                </ul>
                <p>
                  <strong>Dinner</strong>
                </p>
                <ul>
                  <li>
                  Tofu curry with potato and mixed vegetables
                  </li>
                </ul>
               
                <h4 className="mt-4 meal-header">Day Five</h4>
                <hr className="mt-3 mb-3" />
                <p>
                  <strong>Breakfast</strong>
                </p>
                <ul>
                  <li>Multigrain parathas with avocado and sliced papaya</li>
                </ul>
                <p>
                  <strong>Lunch</strong>
                </p>
                <ul>
                  <li>Large salad with rajma curry and quinoa</li>
                </ul>
                <p>
                  <strong>Dinner</strong>
                </p>
                <ul>
                  <li>
                  Lentil pancakes with tofu tikka masala
                  </li>
                </ul>
                <h4 className="mt-4 meal-header">Day Six</h4>
                <hr className="mt-3 mb-3" />
                <p>
                  <strong>Breakfast</strong>
                </p>
                <ul>
                  <li>Sambar with brown rice idli</li>
                </ul>
                <p>
                  <strong>Lunch</strong>
                </p>
                <ul>
                  <li>Whole-grain roti with mixed-vegetable curry</li>
                </ul>
                <p>
                  <strong>Dinner</strong>
                </p>
                <ul>
                  <li>
                    Tofu curry with mixed vegetables and a fresh spinach salad
                  </li>
                </ul>

                
                <h4 className="mt-4 meal-header">Day Seven</h4>
                <hr className="mt-3 mb-3" />
                <p>
                  <strong>Breakfast</strong>
                </p>
                <ul>
                  <li>Chana dal pancakes with mixed vegetables and a glass of milk</li>
                </ul>
                <p>
                  <strong>Lunch</strong>
                </p>
                <ul>
                  <li>Chickpea curry with brown rice</li>
                </ul>
                <p>
                  <strong>Dinner</strong>
                </p>
                <ul>
                  <li>
                  Khichdi with sprout salad
                  </li>
                </ul>
               
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Chart_;
