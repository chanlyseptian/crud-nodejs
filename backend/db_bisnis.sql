-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: db_bisnis
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.13-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `data_product`
--

DROP TABLE IF EXISTS `data_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `data_product` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(60) NOT NULL,
  `premium` decimal(10,2) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_product`
--

LOCK TABLES `data_product` WRITE;
/*!40000 ALTER TABLE `data_product` DISABLE KEYS */;
INSERT INTO `data_product` VALUES (1,'Asuransi Mikro KKM',50000.00),(2,'Asuransi Pijar',200000.00),(3,'Asuransi Life Car',75000.00),(4,'Asuransi AcciCare',35000.00);
/*!40000 ALTER TABLE `data_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data_transaction`
--

DROP TABLE IF EXISTS `data_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `data_transaction` (
  `trans_id` int(10) NOT NULL AUTO_INCREMENT,
  `trans_date` date DEFAULT NULL,
  `user_id` varchar(25) NOT NULL,
  `product_id` int(11) NOT NULL,
  `qty_order` int(11) NOT NULL,
  `total_order` decimal(10,2) NOT NULL,
  PRIMARY KEY (`trans_id`),
  KEY `product_id` (`product_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `data_transaction_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `data_product` (`product_id`),
  CONSTRAINT `data_transaction_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `data_user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_transaction`
--

LOCK TABLES `data_transaction` WRITE;
/*!40000 ALTER TABLE `data_transaction` DISABLE KEYS */;
INSERT INTO `data_transaction` VALUES (1,'2021-11-11','A01',1,1,50000.00),(2,'2021-11-12','A02',2,1,200000.00),(3,'2021-12-12','A02',2,1,200000.00),(4,'2021-11-15','A02',2,1,200000.00),(5,'2021-11-15','A01',2,1,200000.00),(6,'2021-11-15','A01',2,1,200000.00),(7,'2021-11-15','A01',2,1,200000.00);
/*!40000 ALTER TABLE `data_transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data_user`
--

DROP TABLE IF EXISTS `data_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `data_user` (
  `user_id` varchar(25) NOT NULL,
  `user_name` varchar(80) NOT NULL,
  `active` int(11) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_user`
--

LOCK TABLES `data_user` WRITE;
/*!40000 ALTER TABLE `data_user` DISABLE KEYS */;
INSERT INTO `data_user` VALUES ('A01','user A01',1),('A02','user A02',1),('B02','user B02',1),('C01','user C01',0),('C02','user C02',1),('C04','user C04',0);
/*!40000 ALTER TABLE `data_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_bisnis'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-30 17:30:53
