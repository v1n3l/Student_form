SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";



CREATE TABLE `tblstudents` (
  `id` int NOT NULL,
  `firstname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `lastname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `birthday` date NOT NULL,
  `address` varchar(255) NOT NULL,
  `course` varchar(255) NOT NULL,
  `year` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `phoneno` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `tblstudents` (`id`, `firstname`, `lastname`, `birthday`, `address`, `course`, `year`, `email`, `phoneno`) VALUES
(22, 'Vinel', 'Domingo', '2000-11-24', 'manlapig Capas, Tarlac', 'bsit', 2, 'aquino@email.com', '09465515102');


ALTER TABLE `tblstudents`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `tblstudents`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

