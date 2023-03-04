package database

//
//import (
//	"context"
//	"fmt"
//	"github.com/joho/godotenv"
//	"github.com/ssnair610/EMR-blockchain/uplink/models"
//	"go.mongodb.org/mongo-driver/mongo"
//	"go.mongodb.org/mongo-driver/mongo/options"
//	"log"
//	"os"
//)
//
//var collection *mongo.Collection
//
//func init() {
//
//	if err := godotenv.Load(); err != nil {
//		log.Println("No .env file found")
//	}
//	uri := os.Getenv("MONGODB_URI")
//	if uri == "" {
//		log.Fatal("You must set your 'MONGODB_URI' environmental variable. See\n\t https://www.mongodb.com/docs/drivers/go/current/usage-examples/#environment-variable")
//	}
//	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(uri))
//	if err != nil {
//		panic(err)
//	}
//	defer func() {
//		if err := client.Disconnect(context.TODO()); err != nil {
//			panic(err)
//		}
//	}()
//
//}
//
//func insertData(user models.User) {
//
//	inserted, err := collection.InsertOne(context.TODO(), user)
//	if err != nil {
//		log.Fatal(err)
//	}
//
//	fmt.Print("Data successfully Inserted with id : ", inserted.InsertedID)
//
//}
//
//func InsertData(user models.User) {
//
//	inserted, err := collection.InsertOne(context.TODO(), user)
//	if err != nil {
//		log.Fatal(err)
//	}
//
//	fmt.Print("Data successfully Inserted with id : ", inserted.InsertedID)
//
//}
//
////
////// Updating Data
////func updateData(movieId string) {
////	id, err := primitive.ObjectIDFromHex(movieId)
////	if err != nil {
////		log.Fatal("Error while finding id of data , error is : ", err)
////	}
////
////	filter := bson.M{"_id": id}
////	update := bson.M{"$set": bson.M{"watched": true}}
////
////	result, err := collection.UpdateOne(context.TODO(), filter, update)
////	if err != nil {
////		log.Fatal("Error while updating the database , error :", err)
////	}
////
////	fmt.Println("Modified Count : ", result.ModifiedCount)
////
////}
////
////// Deleting Record
////
////func deleteData(movieId string) {
////	id, err := primitive.ObjectIDFromHex(movieId)
////	if err != nil {
////		log.Fatal("Error while finding id of data , error is : ", err)
////	}
////
////	filter := bson.M{"_id": id}
////
////	deleteCountBack, err := collection.DeleteOne(context.TODO(), filter)
////	if err != nil {
////		log.Fatal("Error while deleting the data , error is : ", err)
////
////	}
////
////	fmt.Println("Data got deleted with Count back :", deleteCountBack)
////}
////
//////Print db
////
////func printDataBase() []primitive.M {
////	cur, err := collection.Find(context.TODO(), bson.D{{}})
////	if err != nil {
////		log.Fatal(err)
////	}
////
////	var movies []primitive.M
////
////	for cur.Next(context.TODO()) {
////		var movie bson.M
////		if err := cur.Decode(&movie); err != nil {
////			log.Fatal(err)
////		}
////		movies = append(movies, movie)
////		fmt.Println(movie)
////
////	}
////
////	defer func(cur *mongo.Cursor, ctx context.Context) {
////		err := cur.Close(ctx)
////		if err != nil {
////			log.Println(err)
////		}
////	}(cur, context.TODO())
////
////	return movies
////}
//
//// Actual Controllers
//
////func GetAllData(w http.ResponseWriter, r *http.Request) {
////	w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
////	allMovies := printDataBase()
////	json.NewDecoder(w).Encode(allMovies)
////}
////
////func CreateData(w http.ResponseWriter, r *http.Request) {
////	w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
////	w.Header().Set("Access-Control-Allow-Methods")
////}
