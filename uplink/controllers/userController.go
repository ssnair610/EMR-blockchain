package controllers

//
//import (
//	"context"
//	"encoding/json"
//	"fmt"
//	"github.com/ssnair610/EMR-blockchain/uplink/models"
//	"go.mongodb.org/mongo-driver/bson"
//	"go.mongodb.org/mongo-driver/bson/primitive"
//	"go.mongodb.org/mongo-driver/mongo"
//	"go.mongodb.org/mongo-driver/mongo/options"
//	"log"
//)
//
//const (
//	connectionString = "mongodb+srv://goUser:goUser@cluster0.hxytvs8.mongodb.net/?retryWrites=true&w=majority"
//	dbName           = "userData"
//
//	collectionName = "userCreds"
//)
//
//var collection *mongo.Collection
//
//// connecting to the mongoAtlas database
//func ConnectToDb() {
//
//	//client connection
//	clientOption := options.Client().ApplyURI(connectionString)
//
//	//connect to the mongoAtlas database
//	client, err := mongo.Connect(context.TODO(), clientOption)
//	if err != nil {
//		log.Fatal("Error while connecting to the database , error is : ", err)
//	}
//	fmt.Println("Successfully connected to database")
//
//	//collection = client.Database(dbName).Collection(collectionName)
//	//fmt.Print("Collection is ready to be used")
//
//	coll := client.Database("sample_mflix").Collection("movies")
//	title := "Back to the Future"
//	var result bson.M
//	err = coll.FindOne(context.TODO(), bson.D{{"title", title}}).Decode(&result)
//	if err == mongo.ErrNoDocuments {
//		fmt.Printf("No document was found with the title %s\n", title)
//		return
//	}
//	if err != nil {
//		panic(err)
//	}
//	jsonData, err := json.MarshalIndent(result, "", "    ")
//	if err != nil {
//		panic(err)
//	}
//	fmt.Printf("%s\n", jsonData)
//}
//
//// MongoDb helpers
//func insertData(movie models.Netflix) {
//
//	inserted, err := collection.InsertOne(context.TODO(), movie)
//	if err != nil {
//		log.Fatal("Error while inserting data , ", movie, " , error is : ", err)
//	}
//
//	fmt.Print("Data successfully Inserted with id : ", inserted.InsertedID)
//
//}
//
//// Updating Data
//func updateData(movieId string) {
//	id, err := primitive.ObjectIDFromHex(movieId)
//	if err != nil {
//		log.Fatal("Error while finding id of data , error is : ", err)
//	}
//
//	filter := bson.M{"_id": id}
//	update := bson.M{"$set": bson.M{"watched": true}}
//
//	result, err := collection.UpdateOne(context.TODO(), filter, update)
//	if err != nil {
//		log.Fatal("Error while updating the database , error :", err)
//	}
//
//	fmt.Println("Modified Count : ", result.ModifiedCount)
//
//}
//
//// Deleting Record
//
//func deleteData(movieId string) {
//	id, err := primitive.ObjectIDFromHex(movieId)
//	if err != nil {
//		log.Fatal("Error while finding id of data , error is : ", err)
//	}
//
//	filter := bson.M{"_id": id}
//
//	deleteCountBack, err := collection.DeleteOne(context.TODO(), filter)
//	if err != nil {
//		log.Fatal("Error while deleting the data , error is : ", err)
//
//	}
//
//	fmt.Println("Data got deleted with Count back :", deleteCountBack)
//}
//
////Print db
//
//func printDataBase() []primitive.M {
//	cur, err := collection.Find(context.TODO(), bson.D{{}})
//	if err != nil {
//		log.Fatal(err)
//	}
//
//	var movies []primitive.M
//
//	for cur.Next(context.TODO()) {
//		var movie bson.M
//		if err := cur.Decode(&movie); err != nil {
//			log.Fatal(err)
//		}
//		movies = append(movies, movie)
//		fmt.Println(movie)
//
//	}
//
//	defer func(cur *mongo.Cursor, ctx context.Context) {
//		err := cur.Close(ctx)
//		if err != nil {
//			log.Println(err)
//		}
//	}(cur, context.TODO())
//
//	return movies
//}
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
